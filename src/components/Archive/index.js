// import React from 'react'
// import { StaticQuery, graphql, Link } from 'gatsby'

// const archiveQuery = graphql`
// 	query ArchiveQuery {
// 		allMarkdownRemark(
// 			limit: 5,
// 			sort: {
// 				fields: [frontmatter___date],
// 				order: DESC,
// 			}) {
// 			edges {
// 				node {
// 					frontmatter {
// 						slug
// 						title
// 					}
// 				}
// 			}
// 		}
// 	}
// `

// const Archive = () => (
//   <StaticQuery
//     query={archiveQuery}
//     render={({allMarkdownRemark}) => (
//       <>
// 				<h3>Archive</h3>
// 				<ul>
// 					{
// 						allMarkdownRemark.edges.map(edge => {
// 							const { slug, title } = edge.node.frontmatter
// 							return (
// 								<li key={slug}>
// 									<Link to={`/${slug}`}>{title}</Link>
// 								</li>
// 							)
// 						})
// 					}
// 				</ul>
//       </>
//     )}
//   />
// )

// export default Archive
