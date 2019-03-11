import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Footer from '../components/footer'
import ThemeProvider from 'react-theme-provider'
import Theme from '../theme.js'

const theme = {
  primary: 'red',
}

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <Header siteTitle="lala" />
    {children()}
    <Footer />
  </ThemeProvider>
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
      }
    }
  }
`
