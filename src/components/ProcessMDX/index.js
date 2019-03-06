import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Post from '../Post'

const ProcessMDX = (props) => {
	const { frontmatter, code } = props.data.mdx
	return (
		<Post
			date={frontmatter.date}
			location={props.location}
			title={frontmatter.title}
		>
			<MDXRenderer>{code.body}</MDXRenderer>
		</Post>
	)
}

export default ProcessMDX

export const queryMdx = graphql`query mdxPostQuery( $slug: String! ) {
  mdx(frontmatter: {
    slug: {
      eq: $slug
    }
  }) {
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
    }
    code {
      body
    }
  }
}`
