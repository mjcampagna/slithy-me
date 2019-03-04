const path = require('path')

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return new Promise((resolve, reject) => {
		graphql(`{
			allMdx {
				edges {
					node {
						frontmatter {
							slug
						}
					}
				}
			}
		}`)
		.then(results => {
			results.data.allMdx.edges.forEach(({ node }) => {
				const { slug } = node.frontmatter
				createPage({
					path: `post/${slug}`,
					component: path.resolve(`./src/components/Post/mdx-post.js`),
					context: {
						slug
					},
				})
			})
			resolve()
		})
	})
}
