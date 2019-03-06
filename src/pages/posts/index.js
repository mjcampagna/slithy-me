import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const Posts = ({ data, location }) => {
	const { edges: posts } = data.allMdx
	return (
		<Layout location={location}>
			<SEO
				title="Posts"
			/>
			{ posts.map(({ node }) => {
				const { excerpt, id } = node
				const { slug } = node.fields
				const { date, title } = node.frontmatter
				return (
					<article key={id}>
						<h2 className="heading"><Link to={slug}>{title}</Link></h2>
						<p className="dateline">{date}</p>
						<p>{/* edge.node.frontmatter.excerpt || */ excerpt}</p>
					</article>
				)
		})}
		</Layout>
	)
}

export default Posts

export const pageQuery = graphql`
  query blogIndex {
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
