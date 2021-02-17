/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Jamal Pelpuo`,
    description: `Jamal Pelpuo loves building applications and telling computers what todo.`,
    author: `Jamal Pelpuo`,
    // siteUrl: ``,
    twitterHandle: `@Jpelpuo`,
    // githubUsername: `jpelpuo`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:  `content`,
        path: `${__dirname}/content`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JamalPelpuo`,
        short_name: `JamalPelpuo`,
        start_url: `/`,
        background_color: `green`,
        theme_color: `grey`,
        display: `standalone`,
        icon: `src/images/icon.png`
      }
    },
    `gatsby-plugin-offline`,
  ],
}
