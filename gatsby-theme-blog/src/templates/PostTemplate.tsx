import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/Layout";
import PostFooter from "../components/PostFooter";

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

const PostTemplate = ({ data: { post }, pageContext }: Props) => {
  const { next, previous } = pageContext;
  const showPostNavigation = next !== null || previous !== null;

  return (
    <Layout>
      <MDXRenderer>{post.body}</MDXRenderer>
      {showPostNavigation && <PostFooter next={next} previous={previous} />}
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query($slug: String!) {
    post(slug: { eq: $slug }) {
      slug
      title
      body
    }
  }
`;
