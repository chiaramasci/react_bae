import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Footer from '../components/footer'
import ThemeProvider from 'react-theme-provider'
import Helmet from 'react-helmet'
import theme from '../theme'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      siteTitle={data.site.siteMetadata.title}
      meta={[
        { name: 'keywords', content: data.site.siteMetadata.keywords },
        { name: 'description', content: data.site.siteMetadata.description },
      ]}
    />
    <Header />
    {children()}
    <div style={{ color: theme.primaryColor }} />
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
