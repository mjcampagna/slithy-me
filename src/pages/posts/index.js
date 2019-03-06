import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const Posts = ({ children, data, location }) => {
	const { edges: posts } = data.allMdx
	return (
		<Layout location={location}>
			<SEO
				title="Blog"
			/>
			{ posts.map(({ node }) => {
				const { excerpt } = node
				const { date, slug, title } = node.frontmatter
				return (
					<article key={slug}>
						<h2 className="heading"><Link to={`post/${slug}`}>{title}</Link></h2>
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
