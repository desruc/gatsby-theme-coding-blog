import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PostListing from "../components/PostListing";

type Props = {
  data: {
    mdxPosts: any;
    [key: string]: string;
  };
};

const HomePageTemplate = ({ data: { mdxPosts } }: Props) => {
  const { edges } = mdxPosts;

  return (
    <Layout>
      Home page
      <PostListing posts={edges} />
    </Layout>
  );
};

export const query = graphql`
  query {
    mdxPosts: allMdx(filter: { fields: { source: { eq: "content/posts" } } }, limit: 5) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date
            description
          }
        }
      }
    }
  }
`;

export default HomePageTemplate;
