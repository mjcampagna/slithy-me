import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { useTransition, animated } from 'react-spring'

import 'normalize.css'
import './style.scss'
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
        <div className="page-wrapper" id="page-wrapper">
          <div className="page-body" id="page-body">
            <Header
              location={location}
              siteTitle={data.site.siteMetadata.title}
            />
            { transitions.map(({ key, props }) =>
              <animated.main key={key} style={props}>
                {children}
              </animated.main>
            )}
            <Footer />
          </div>
          <div id="side">...</div>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
