/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`query {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }`)
  if (result.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query')
  }
  const posts = result.data.allMdx.edges
  posts.forEach(({ node }, index) => {
    const slug = encodeURIComponent((`${node.frontmatter.slug || node.frontmatter.title}`).trim().replace(/[^a-zA-Z0-9_\-\s]/g, '')).replace(/%20/g, '-').toLowerCase()

    createPage({
      component: path.resolve(`./src/components/templates/template-post.js`),
      context: {
        id: node.id,
      },
      path: `posts/${slug}`,
    })
  })
}
