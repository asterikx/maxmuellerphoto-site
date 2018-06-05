import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Padding } from 'styled-components-spacing'
import GalleryPreview from '../components/gallery-preview'

const PreviewGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-gap: 40px;
  justify-content: center;
`

const Galleries = ({ data }) => {
  const { title: siteTitle } = data.site.siteMetadata
  const galleries = data.allContentfulGallery.edges.map(edge => edge.node)

  return (
    <Padding vertical={3}>
      <PreviewGrid>
        <Helmet title={`Galleries - ${siteTitle}`} />
        {galleries.map(gallery => (
          <GalleryPreview key={gallery.slug} contentfulGallery={gallery} />
        ))}
      </PreviewGrid>
    </Padding>
  )
}

export default Galleries

export const pageQuery = graphql`
  query GalleriesQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulGallery {
      edges {
        node {
          title
          slug
          featuredImage {
            photo {
              resolutions(width: 350) {
                ...GatsbyContentfulResolutions
              }
            }
          }
        }
      }
    }
  }
`
