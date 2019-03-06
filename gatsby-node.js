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
		graphql(`
			{
				allMdx {
					edges {
						node {
							fields {
								slug
							}
						}
					}
				}
			}
		`)
		.then(results => {
			results.data.allMdx.edges.forEach(({ node }) => {
				const { slug } = node.fields
				createPage({
					path: slug,
					component: path.resolve(`./src/components/ProcessMDX/index.js`),
					context: {
						slug
					},
				})
			})
			resolve()
		})
	})
}
