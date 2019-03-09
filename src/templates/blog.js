import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Posts from '../components/Posts'

const Archive = ({ data, location, pageContext }) => {
	const { edges: posts } = data.allMdx
	const { currentPage, numPages } = pageContext
	return (
		<Layout location={location}>
			<SEO
				title="Blog"
			/>

			{ posts.map(({ node }) => {
				const { excerpt, id } = node
				const { slug } = node.fields
				const { date, title } = node.frontmatter
				return (
					<Posts 
						date={date}
						excerpt={/* edge.node.frontmatter.excerpt || */ excerpt}
						id={id}
						slug={slug}
						title={title}
					/>
				)
			})}

			<ul className="pagination">
				{ currentPage >= 2 &&
					<li>
						<Link to={`/${currentPage === 2 ? '' : currentPage - 1}`}>
							&#x2190;
						</Link>
					</li>
				}
				{ currentPage < numPages &&
					<li>
						<Link to={`/${currentPage + 1}`}>
							&#x2192;
						</Link>
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
