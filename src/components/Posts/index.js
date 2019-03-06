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
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						slug
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
					const { date, slug, title } = edge.node.frontmatter
					return (
						<article key={slug}>
							<h2 className="heading"><Link to={`post/${slug}`}>{title}</Link></h2>
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
