// import React from 'react'
// import { graphql } from 'gatsby'
// import Layout from '../Layout'
// import SEO from '../SEO'

// const Post = (props) => {
// 	const { frontmatter, html } = props.data.markdownRemark
// 	return (
// 		<Layout location={props.location}>
//       <SEO
//         title={frontmatter.title}
//       />
//       <article>
//         <h1 className="heading">{frontmatter.title}</h1>
//         <p className="dateline">{frontmatter.date}</p>
//         <div dangerouslySetInnerHTML={{
//           __html: html
//         }} />
//       </article>
//     </Layout>
// 	)
// }

// export default Post

// export const queryMd = graphql`query mdPostQuery( $slug: String! ) {
//   markdownRemark(frontmatter: {
//     slug: {
//       eq: $slug
//     }
//   }) {
//     frontmatter {
//       date(formatString: "MMMM DD, YYYY")
//       title
//     }
//     html
//   }
// }`
