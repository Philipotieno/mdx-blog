
module.exports = {
  /* Your site config here */
  plugins: [
  {
    resolve: `gatsby-source-filesytem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages`
    },
  },
  {
    resolve: `gatsby-source-filesytem`,
    options: {
      name: `posts`,
      path: `${__dirname}/src/posts`
    },
  },
  {
    resolve: `gatsby-source-filesytem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`
    },
  },
  ],
}
