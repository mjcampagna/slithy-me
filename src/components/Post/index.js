import React from 'react'
import Layout from '../Layout'
import SEO from '../SEO'
import './style.scss'

const Post = ({ children, date, location, title }) => (
	<Layout location={location}>
		<SEO
			title={title}
		/>
		<article className="post">
			<h1 className="heading">{title}</h1>
			{date && <p className="dateline">{date}</p>}
			{children}
		</article>
	</Layout>
)

export default Post
