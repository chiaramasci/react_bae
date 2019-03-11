import React from 'react'
import Link from 'gatsby-link'
import headerContent from '../../content/headerContent.json'
import styled from 'styled-components'

const SiteTitle = styled.h3`
  background: ${props => props.theme.primary};
  text-decoration:none;
`

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div>
        <SiteTitle>
          <Link className="header__siteTitle" to="/">
            {this.props.siteTitle}
          </Link>
        </SiteTitle>
        {headerContent.pages.map((page, index) => (
          <Link key={index} to={page.url}>
            {page.title}
          </Link>
        ))}
      </div>
    )
  }
}

export default Header
