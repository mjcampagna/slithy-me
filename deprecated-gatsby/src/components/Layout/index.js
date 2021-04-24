import 'normalize.css'
import './personalize.css'
import './style.scss'

import React from 'react'
import PropTypes from 'prop-types'
import SEO from './seo'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ children, seo }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO {...seo} />
      <div className="page--wrapper">
        <div className="page">
          <div className="page--body">

            <header>
              <Link to="/">
                <h1>Slithy.me</h1>
              </Link>
            </header>

            <main>{children}</main>
            <footer></footer>
            <nav>
              <Link to="/posts">Posts</Link>
            </nav>

          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
