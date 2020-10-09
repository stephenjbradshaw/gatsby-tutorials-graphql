module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
    badgers: `badgers`
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
