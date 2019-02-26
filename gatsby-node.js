const path = require('path')

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return new Promise((resolve, reject) => {
		graphql(`{
			allMarkdownRemark {
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
			results.data.allMarkdownRemark.edges.forEach(({ node }) => {
				const { slug } = node.frontmatter
				createPage({
					path: slug,
					component: path.resolve(`./src/templates/post.js`),
					context: {
						slug
					},
				})
			})
			resolve()
		})
	})
}
