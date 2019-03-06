// import React from 'react'
// import { graphql } from 'gatsby'
// import Layout from '../Layout'
// import SEO from '../SEO'
// import MDXRenderer from "gatsby-mdx/mdx-renderer";

// const Post = (props) => {
// 	const { frontmatter, code } = props.data.mdx
// 	return (
// 		<Layout location={props.location}>
//       <SEO
//         title={frontmatter.title}
//       />
//       <article>
//         <h1 className="heading">{frontmatter.title}</h1>
//         <p className="dateline">{frontmatter.date}</p>
//         <MDXRenderer>{code.body}</MDXRenderer>
//       </article>
//     </Layout>
// 	)
// }

// export default Post

// export const queryMdx = graphql`query mdxPostQuery( $slug: String! ) {
//   mdx(frontmatter: {
//     slug: {
//       eq: $slug
//     }
//   }) {
//     frontmatter {
//       date(formatString: "MMMM DD, YYYY")
//       title
//     }
//     code {
//       body
//     }
//   }
// }`
