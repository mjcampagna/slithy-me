import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const About = ({ location }) => (
	<Layout location={location}>
		<SEO
			title="About Us"
		/>

		<h1>About Us</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, massa ac lobortis feugiat, libero lectus ultrices orci, et euismod quam nisl non leo. Nullam fermentum, est sed accumsan iaculis, eros justo tristique orci, ac viverra metus magna eu eros. Cras luctus luctus volutpat. Proin non massa mauris. Donec pharetra maximus ante ac tempor. Nulla porta fringilla leo. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In at urna non diam eleifend aliquet. Fusce ex sapien, semper non porta et, posuere at dolor. Aenean eget fermentum urna, vitae ultricies felis.</p>

		<Link to="/">Go back to the homepage</Link>
	</Layout>
)

export default About
