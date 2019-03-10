import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Posts from '../Posts'

const postsQuery = graphql`
	query mdPostsQuery {
		allMarkdownRemark(
			limit: 10,
			sort: {
				fields: [frontmatter___date],
				order: DESC,
			}) {
			edges {
				node {
					id
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

const ProcessMDPosts = () => (
	<StaticQuery
		query={postsQuery}
		render={({allMarkdownRemark}) => (
			<>
			{
				allMarkdownRemark.edges.map(edge => {
					const { excerpt, id } = edge.node
					const { date, slug, title } = edge.node.frontmatter
					return (
						<Posts
							date={date}
							excerpt={/* edge.node.frontmatter.excerpt || */ excerpt}
							id={id}
							slug={slug}
							title={title}
						/>
					)
				})
			}
			</>
		)}
	/>
)

export default ProcessMDPosts
