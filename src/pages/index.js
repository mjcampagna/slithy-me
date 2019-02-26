import React from 'react'

import Layout from '../components/Layout'
import Posts from '../components/Posts'
import SEO from '../components/SEO'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      keywords={[`gatsby`, `application`, `react`]}
      title="Home"
    />
    <Posts />
  </Layout>
)

export default IndexPage
