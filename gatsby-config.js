require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'maxmuellerphoto.com',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        host:
          process.env.NODE_ENV === 'development'
            ? 'preview.contentful.com'
            : 'cdn.contentful.com',
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/config/typography.js',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'maxmuellerphoto-site',
        // short_name: 'maxmuellerphoto.com',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'browser',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
