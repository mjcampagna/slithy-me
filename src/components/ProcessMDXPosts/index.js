import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Posts from '../Posts'

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
					id
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
const ProcessMDXPosts = () => (
	<StaticQuery
		query={postsQuery}
		render={({allMdx}) => (
			<>
			{
				allMdx.edges.map(edge => {
					const { excerpt, id } = edge.node
					const { slug } = edge.node.fields
					const { date, title } = edge.node.frontmatter
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

export default ProcessMDXPosts
