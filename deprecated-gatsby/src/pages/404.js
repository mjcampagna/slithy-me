import React from 'react'
import Layout from 'src/components/Layout'

const NotFoundPage = () => (
  <Layout
    seo={{
      title: '404: Not found',
    }}
  >
    <h1>404: Paradox!</h1>
    <p>You're on a page that does not exist.</p>
  </Layout>
)

export default NotFoundPage
