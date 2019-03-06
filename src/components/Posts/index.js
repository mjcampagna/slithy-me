import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import './style.scss'

const postsQuery = graphql`
	query mdxPostsQuery {
		allMdx(
			limit: 10,
			sort: {
				fields: [frontmatter___date],
				order: DESC,
			}) {
			edges {
				node {
					excerpt
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
`
const Posts = () => (
	<StaticQuery
		query={postsQuery}
		render={({allMdx}) => (
			<>
			{
				allMdx.edges.map(edge => {
					const { excerpt } = edge.node
					const { slug } = edge.node.fields
					const { date, title } = edge.node.frontmatter
					return (
						<article key={slug}>
							<h2 className="heading"><Link to={`${slug}`}>{title}</Link></h2>
							<p className="dateline">{date}</p>
							<p>{/* edge.node.frontmatter.excerpt || */ excerpt}</p>
						</article>
					)
				})
			}
			</>
		)}
	/>
)

export default Posts
