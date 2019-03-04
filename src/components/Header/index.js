import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './style.scss'

import Bio from '../Bio'

const Header = ({ location, siteTitle }) => (
  <header>
    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    { (location.pathname === '/' && false) &&
      <Bio />
    }
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
