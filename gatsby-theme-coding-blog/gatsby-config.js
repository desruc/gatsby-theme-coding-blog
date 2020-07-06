const withDefaults = require(`./default-options`);

module.exports = (themeOptions) => {
  const options = withDefaults(themeOptions);

  return {
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: options.postsPath,
          path: options.postsPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: options.pagesPath,
          path: options.pagesPath,
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 960,
                quality: 90,
                linkImagesToOriginal: false,
              },
            },
          ],
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 960,
                quality: 90,
                linkImagesToOriginal: false,
              },
            },
          ],
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-theme-ui`,
    ],
  };
};
