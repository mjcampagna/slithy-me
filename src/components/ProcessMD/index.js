// import React from 'react'
// import { graphql } from 'gatsby'
// import Post from '../Post'


// const ProcessMD = (props) => {
// 	const { frontmatter, html } = props.data.markdownRemark
// 	return (
// 		<Post
// 			date={frontmatter.date}
// 			location={props.location}
// 			title={frontmatter.title}
// 		>
// 			<div dangerouslySetInnerHTML={{
// 				 __html: html
// 			}} />
// 		</Post>
// 	)
// }

// export default ProcessMD

// export const pageQuery = graphql`query mdPostQuery( $slug: String! ) {
//   markdownRemark(fields: {
//     slug: {
//       eq: $slug
//     }
//   }) {
//     fields {
//       slug
//     }
//     frontmatter {
//       date(formatString: "MMMM DD, YYYY")
//       title
//     }
//     html
//   }
// }`
