import React from "react";

import Layout from "./Layout";
import PostListing from "./PostListing";
import NoPosts from "./NoPosts";

type Props = {
  data: {
    allPost: any;
    [key: string]: string;
  };
};

const Blog = ({ data: { allPost } }: Props) => {
  const { nodes } = allPost;
  const hasPosts = nodes.length > 0;
  return <Layout>{hasPosts ? <PostListing posts={nodes} /> : <NoPosts />}</Layout>;
};

export default Blog;
