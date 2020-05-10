const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);
const kebabCase = require(`lodash.kebabcase`);
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

const mdxResolverPassthrough = (fieldName) => async (source, args, context, info) => {
  const type = info.schema.getType(`Mdx`);
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  });
  return result;
};

exports.createSchemaCustomization = ({ actions, schema }, themeOptions) => {
  const { createTypes, createFieldExtension } = actions;

  createFieldExtension({
    name: `mdxpassthrough`,
    args: {
      fieldName: `String!`,
    },
    extend({ fieldName }) {
      return {
        resolve: mdxResolverPassthrough(fieldName),
      };
    },
  });

  createTypes(`
  interface Post @nodeInterface {
    id: ID!
    slug: String!
    title: String!
    date: Date! @dateformat
    excerpt(pruneLength: Int = 140): String!
    body: String!
    timeToRead: Int
    tags: [PostTag]
    description: String
  }

  type PostTag {
    name: String
    slug: String
  }

  type MdxPost implements Node & Post {
    slug: String!
    title: String!
    date: Date! @dateformat
    excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
    body: String! @mdxpassthrough(fieldName: "body")
    timeToRead: Int @mdxpassthrough(fieldName: "timeToRead")
    tags: [PostTag]
    description: String
  }
  `);
};

exports.onCreateNode = async ({ node, actions, getNode, createNodeId, createContentDigest }, themeOptions) => {
  const { createNode, createParentChildLink } = actions;
  const { postsPath } = withDefaults(themeOptions);

  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return;
  }

  // Create a source field
  // And grab the sourceInstanceName to differentiate the different sources
  // In this case "postsPath" and "pagesPath"
  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  // Check for "posts" and create the "Post" type
  if (node.internal.type === `Mdx` && source === postsPath) {
    let modifiedTags = null;

    if (node.frontmatter.tags) {
      modifiedTags = node.frontmatter.tags.map((tag) => ({
        name: tag,
        slug: kebabCase(tag),
      }));
    }

    const fieldData = {
      slug: node.frontmatter.slug ? node.frontmatter.slug : undefined,
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      tags: modifiedTags,
      description: node.frontmatter.description,
    };

    const mdxPostId = createNodeId(`${node.id} >>> MdxPost`);

    createNode({
      ...fieldData,
      // Required fields
      id: mdxPostId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxPost`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the Post interface`,
      },
    });

    createParentChildLink({ parent: node, child: getNode(mdxPostId) });
  }
};

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions;

  const { basePath, blogPath, postsPerPage } = withDefaults(themeOptions);

  // These templates are graphql queries that import components
  const homepageTemplate = require.resolve(`./src/templates/HomepageQuery.tsx`);
  const blogTemplate = require.resolve(`./src/templates/BlogQuery.tsx`);
  const postTemplate = require.resolve(`./src/templates/PostQuery.tsx`);
  const tagtemplate = require.resolve(`./src/templates/TagQuery.tsx`);

  // Create the homepage
  createPage({
    path: basePath,
    component: homepageTemplate,
  });

  // Create the blog page
  createPage({
    path: blogPath,
    component: blogTemplate,
  });

  const result = await graphql(`
    query {
      allPost(sort: { fields: date, order: DESC }) {
        nodes {
          slug
          title
        }
      }
      tags: allPost(sort: { fields: tags___name, order: DESC }) {
        group(field: tags___name) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`🚨  ERROR: Loading "createPages" query`);
  }

  const posts = result.data.allPost.nodes;

  posts.forEach((post, idx) => {
    const isFirst = idx === 0;
    const isLast = idx === posts.length - 1;
    createPage({
      path: `/blog/${post.slug}`,
      component: postTemplate,
      context: {
        id: post.id,
        slug: post.slug,
        next: isFirst ? null : posts[idx - 1],
        previous: isLast ? null : posts[idx + 1],
      },
    });
  });

  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  const tags = result.data.tags.group;

  if (tags.length > 0) {
    tags.forEach((tag) => {
      createPage({
        path: `/${basePath}/tags/${kebabCase(tag.fieldValue)}`.replace(/\/\/+/g, `/`),
        component: tagtemplate,
        context: {
          slug: kebabCase(tag.fieldValue),
          name: tag.fieldValue,
        },
      });
    });
  }
};
