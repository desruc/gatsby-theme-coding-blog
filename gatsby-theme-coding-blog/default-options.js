module.exports = (themeOptions) => ({
  basePath: themeOptions.basePath || `/`,
  postsPath: themeOptions.postsPath || `content/posts`,
  blogPath: themeOptions.blogPath || `/blog`,
  postsPerPage: themeOptions.postsPerPage || 10,
  pagesPath: themeOptions.pagesPath || `content/pages`,
});
