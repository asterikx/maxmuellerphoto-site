import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

const GalleryPreview = ({ contentfulGallery }) => {
  const { slug, featuredImage } = contentfulGallery

  return (
    <Link to={`/galleries/${slug}`}>
      <Img resolutions={featuredImage.photo.resolutions} />
    </Link>
  )
}

export default GalleryPreview

/*
export default ({ article }) => (
  <div className={styles.preview}>
    <img src={`${article.heroImage.file.url}?fit=scale&w=350&h=196`} alt="" />
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
)
*/
