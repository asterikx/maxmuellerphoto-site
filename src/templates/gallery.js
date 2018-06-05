import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Margin, py } from 'styled-components-spacing'

const StyledGallery = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  ${py(3)};
`

const Gallery = props => {
  const { contentfulGallery, site } = props.data

  const { title: siteTitle } = site.siteMetadata
  const { title: galleryTitle, images } = contentfulGallery

  return (
    <StyledGallery>
      <Helmet title={`${galleryTitle} | ${siteTitle}`} />
      <h1>{galleryTitle}</h1>
      {images.map(({ photo }, index) => (
        <Margin key={index} vertical={4}>
          <Img sizes={photo.sizes} />
        </Margin>
      ))}
    </StyledGallery>
  )
}

export default Gallery

export const pageQuery = graphql`
  query galleryBySlug($slug: String!) {
    contentfulGallery(slug: { eq: $slug }) {
      title
      slug
      images {
        photo {
          sizes(maxWidth: 1200) {
            ...GatsbyContentfulSizes
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
//rick-70th-birthday

/*
publishDate(formatString: "MMMM Do, YYYY")
heroImage {
  file {
    url
  }
}
body {
  childMarkdownRemark {
    html
  }
}
*/
