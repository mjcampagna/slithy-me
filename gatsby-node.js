const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'slug',
      value: `/posts${value}`
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return new Promise((resolve, reject) => {

		resolve(
			graphql(`
				{
					allMdx(
						limit: 2560
						sort: {
							fields: [frontmatter___date],
							order: DESC,
						}
					) {
						edges {
							node {
								id
								excerpt(pruneLength: 250)
								fields {
									slug
								}
								frontmatter {
									date(formatString: "MMMM DD, YYYY")
									title
								}
							}
						}
					}
				}
			`)
			.then(result => {
				if (result.errors) {
					reject(result.errors)
				}
				const posts = result.data.allMdx.edges
				const postsPerPage = 1
				const numPages = Math.ceil(posts.length / postsPerPage)

				Array.from({ length: numPages }).forEach((_, i) => {
					createPage({
						path: i === 0 ? `/blog` : `/blog/${i + 1}`,
						component: path.resolve('./src/templates/blog.js'),
						context: {
							currentPage: i + 1,
							limit: postsPerPage,
							numPages,
							skip: i * postsPerPage,
						},
					})
				})

				posts.forEach(({ node }) => {
					const { slug } = node.fields
					createPage({
						path: slug,
						component: path.resolve(`./src/components/ProcessMDX/index.js`),
						context: {
							slug,
						},
					})
				})
			})
		)
	})
}
