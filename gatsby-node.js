const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const Gallery = path.resolve('./src/templates/gallery.js')
    resolve(
      graphql(
        `
          {
            allContentfulGallery {
              edges {
                node {
                  id
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const galleries = result.data.allContentfulGallery.edges
        galleries.forEach(gallery => {
          createPage({
            path: `/galleries/${gallery.node.slug}/`,
            component: Gallery,
            context: {
              slug: gallery.node.slug,
            },
          })
        })
      })
    )
  })
}
