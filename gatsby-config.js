/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Lucas Pelegrino',
    siteUrl: 'https://pelegrino.me',
    description: 'A personal website with some things about myself',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lucas Pelegrino`,
        short_name: `Pelegrino`,
        start_url: `/`,
        icon: 'src/assets/images/favicon.png',
        background_color: `#3b4252`,
        theme_color: `#3b4252`,
        display: `standalone`,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ],
};
