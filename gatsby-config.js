module.exports = {
  siteMetadata: {
    title: `Gatsby Petro`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-catch-links",

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
