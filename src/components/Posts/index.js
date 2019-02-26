import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'

const postsQuery = graphql`
	query PostsQuery {
		allMarkdownRemark(
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
		render={({allMarkdownRemark}) => (
			<>
			{
				allMarkdownRemark.edges.map(edge => {
					const { excerpt } = edge.node
					const { date, slug, title } = edge.node.frontmatter
					return (
						<article key={slug}>
							<h2><Link to={slug}>{title}</Link></h2>
							<p>{date}</p>
							<p>{excerpt}</p>
						</article>
					)
				})
			}
			</>
		)}
	/>
)


export default Posts
