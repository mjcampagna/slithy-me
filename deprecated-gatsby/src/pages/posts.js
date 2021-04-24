import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from 'src/components/Layout'

const Posts = ({ data }) => {
	const { edges: posts } = data.allMdx
	return (
		<Layout>
			<ul>
			{posts.map(({ node: post }) => {
				const slug = encodeURIComponent((`${post.frontmatter.slug || post.frontmatter.title}`).trim().replace(/[^a-zA-Z0-9_\-\s]/g, '')).replace(/%20/g, '-').toLowerCase()
				return (
					<li key={post.id}>
						<Link to={`posts/${slug}`}>
							<h2>{post.frontmatter.title}</h2>
						</Link>
						<p>{post.excerpt}</p>
					</li>
				)
			})}
		</ul>
	</Layout>
	)
}

export default Posts

export const pageQuery = graphql`
  query BlogPostsQuery {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
						slug
            title
          }
        }
      }
    }
  }
`
