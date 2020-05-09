import React from "react";

import Layout from "./Layout";
import PostListing from "./PostListing";

type Props = {
  data: {
    allPost: any;
    [key: string]: string;
  };
};

const Blog = ({ data: { allPost } }: Props) => {
  const { nodes } = allPost;
  return (
    <Layout>
      <PostListing posts={nodes} />
    </Layout>
  );
};

export default Blog;
