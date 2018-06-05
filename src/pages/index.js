import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Img from 'gatsby-image'
//import ArticlePreview from '../components/article-preview'

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`

const Index = ({ data }) => {
  const { images } = data.allContentfulPortfolio.edges[0].node

  return (
    <ImageGrid>
      {images.map(({ photo }, index) => (
        <Img key={index} sizes={photo.sizes} />
      ))}
    </ImageGrid>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulPortfolio {
      edges {
        node {
          images {
            photo {
              sizes(quality: 100, maxWidth: 700) {
                ...GatsbyContentfulSizes
              }
            }
          }
        }
      }
    }
  }
`

/*
site {
  siteMetadata {
    title
  }
}
*/
