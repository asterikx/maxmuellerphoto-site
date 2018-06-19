import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import Link from 'gatsby-link'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import './globalStyles'
import theme from '../config/theme'

const Content = styled.main`
  margin-top: 6.5rem;
  margin-bottom: 3.3rem;
`

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Max Müller Photography Blog' },
          { name: 'keywords', content: 'Photography, Motorsport, Blog' },
        ]}
      />
      <Header />
      <Content>{children()}</Content>
      <Footer />
    </div>
  </ThemeProvider>
)

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
