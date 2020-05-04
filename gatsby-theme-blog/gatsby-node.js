const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);
const withDefaults = require(`./default-options`);

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  const { program } = store.getState();

  const { postsPath } = withDefaults(themeOptions);

  const dirs = [path.join(program.directory, postsPath)];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      reporter.info(`Initializing "${dir}" directory`);
      mkdirp.sync(dir);
    }
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    // Grab the sourceInstanceName to differentiate the different sources
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;

    createNodeField({
      node,
      name: `source`,
      value: source,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions;

  const { basePath, blogPath } = withDefaults(themeOptions);

  // Create the homepage
  createPage({
    path: basePath,
    component: require.resolve(`./src/templates/HomeTemplate.tsx`),
  });

  // Create the blog page
  createPage({
    path: blogPath,
    component: require.resolve(`./src/templates/BlogTemplate.tsx`),
  });

  const result = await graphql(`
    query {
      mdxPosts: allMdx(filter: { fields: { source: { eq: "content/posts" } } }) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`🚨  ERROR: Loading "createPages" query`);
  }

  const posts = result.data.mdxPosts.edges;

  posts.forEach(({ node }, idx) => {
    const isFirst = idx === 0;
    const isLast = idx === posts.length - 1;
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: require.resolve(`./src/templates/PostTemplate.tsx`),
      context: {
        id: node.id,
        previous: isFirst ? null : posts[idx - 1].node,
        next: isLast ? null : posts[idx + 1].node,
      },
    });
  });
};
