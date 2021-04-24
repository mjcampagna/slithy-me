import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from 'src/components/Layout'

const PostTemplate = ({ data: { mdx } }) => (
  <Layout
    seo={{
      title: mdx.frontmatter.title,
    }}
  >
    <h1>{mdx.frontmatter.title}</h1>
    <MDXRenderer>
      {mdx.body}
    </MDXRenderer>
  </Layout>
)

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
