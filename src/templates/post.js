import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

const Post = (props) => {
	const { frontmatter, html } = props.data.markdownRemark
	return (
		<Layout location={props.location}>
			<h1>{frontmatter.title}</h1>
			<p>{frontmatter.date}</p>
			<div dangerouslySetInnerHTML={{
				__html: html
			}} />
		</Layout>
	)
}

export default Post

export const query = graphql`query postQuery( $slug: String! ) {
  markdownRemark(frontmatter: {
    slug: {
      eq: $slug
    }
  }) {
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
    }
    html
  }
}`
