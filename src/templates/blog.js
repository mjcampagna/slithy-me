import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Archive = ({ data, location, pageContext }) => {
	const { edges: posts } = data.allMdx
	const { currentPage, numPages } = pageContext
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

			<ul>
				{ currentPage >= 2 &&
					<li>
						<a href={`/blog/${currentPage === 2 ? '' : currentPage - 1}`}>Previous</a>
					</li>
				}
				{ currentPage < numPages &&
					<li>
						<a href={`/blog/${currentPage + 1}`}>Next</a>
					</li>
				}
			</ul>
		</Layout>
	)
}

export default Archive

export const pageQuery = graphql`
  query blogIndex(
		$limit: Int!,
		$skip: Int!,
	) {
		allMdx(
			limit: $limit,
			skip: $skip,
			sort: {
				fields: [frontmatter___date],
				order: DESC,
			},
		) {
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
