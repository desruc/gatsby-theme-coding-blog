import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "./Layout";
import PostFooter from "./PostFooter";

type Props = {
  data: {
    post: {
      slug: string;
      title: string;
      body: string;
    };
  };
  pageContext: {
    next: {
      slug: string;
      title: string;
    };
    previous: {
      slug: string;
      title: string;
    };
  };
};

const Post = ({ data: { post }, pageContext }: Props) => {
  const { next, previous } = pageContext;
  const showPostNavigation = next !== null || previous !== null;

  return (
    <Layout>
      <MDXRenderer>{post.body}</MDXRenderer>
      {showPostNavigation && <PostFooter next={next} previous={previous} />}
    </Layout>
  );
};

export default Post;
