import React from 'react'
import Layout from 'src/components/Layout'

const DefaultTemplate = ({ children }) => (
  <Layout
    seo={{
      title: 'Default',
    }}
  >
		{children}
  </Layout>
)

export default DefaultTemplate
