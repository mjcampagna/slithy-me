import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { useTransition, animated } from 'react-spring'

import 'normalize.css'
import './style.css'
// import './layout.css'

import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children, location }) => {
  // eslint-disable-next-line
  const [show, set] = useState(false)
  const transitions = useTransition(show, null, {
    from:  { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header
            siteTitle={data.site.siteMetadata.title}
          />

          { transitions.map(({ key, props }) =>
            <animated.main key={key} style={props}>
              {children}
            </animated.main>
          )}

          <Footer />
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
