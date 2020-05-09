import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PostListing from "../components/PostListing";

type Props = {
  data: {
    allPost: any;
    [key: string]: string;
  };
};

const HomePageTemplate = ({ data: { allPost } }: Props) => {
  const { nodes } = allPost;

  return (
    <Layout>
      Home page
      <PostListing posts={nodes} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allPost(sort: { fields: date, order: DESC }, limit: 5) {
      nodes {
        slug
        title
        description
        date
      }
    }
  }
`;

export default HomePageTemplate;
