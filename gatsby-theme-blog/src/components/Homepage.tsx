import React from "react";
import Layout from "./Layout";
import PostListing from "./PostListing";

type Props = {
  data: {
    allPost: any;
    [key: string]: string;
  };
};

const Homepage = ({ data: { allPost } }: Props) => {
  const { nodes } = allPost;

  return (
    <Layout>
      Home page
      <PostListing posts={nodes} />
    </Layout>
  );
};

export default Homepage;
