module.exports = (themeOptions) => ({
  basePath: themeOptions.basePath || `/`,
  postsPath: themeOptions.postsPath || `content/posts`,
  blogPath: themeOptions.blogPath || `/blog`,
});
