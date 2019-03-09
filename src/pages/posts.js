import React from 'react'

import Layout from '../components/Layout'
import ProcessMDXPosts from '../components/ProcessMDXPosts'
import SEO from '../components/SEO'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      keywords={[`gatsby`, `application`, `react`]}
      title="Home"
    />
    <ProcessMDXPosts />
  </Layout>
)

export default IndexPage
