import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import './style.scss'

const Bio = () => {
  // eslint-disable-next-line
  const [show, set] = useState(false)
  const transitions = useTransition(show, null, {
    from:  { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
	return (
		<>
		{ transitions.map(({ key, props }) =>
			<animated.ul id="header-bio" key={key} style={props}>
				<li>'Twas brillig, and the slithy toves did gyre and gimble in the wabe ...</li>
			</animated.ul>
		)}
		</>
	)
}

export default Bio
