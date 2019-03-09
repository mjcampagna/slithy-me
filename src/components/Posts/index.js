import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

const Posts = (props) => {
	const { date, excerpt, id, slug, title } = props
	return (
		<article className="post-preview" key={id}>
			<h2 className="heading"><Link to={`${slug}`}>{title}</Link></h2>
			<p className="dateline">{date}</p>
			<p>{excerpt}</p>
		</article>
	)
}

export default Posts
