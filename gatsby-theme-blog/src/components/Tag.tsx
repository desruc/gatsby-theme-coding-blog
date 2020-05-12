import React from "react";
import { Heading } from "@theme-ui/components";
import { Link } from "gatsby";
import { Link as TLink, Flex } from "theme-ui";

import Layout from "./Layout";
import PostListing from "./PostListing";

type Props = {
  data: {
    allPost: any;
    [key: string]: string;
  };
  pageContext: {
    slug: string;
    name: string;
  };
};

const Blog = ({ data: { allPost }, pageContext }: Props) => {
  const { nodes } = allPost;
  const { name } = pageContext;
  return (
    <Layout>
      <Flex sx={{ mb: [4, 5], alignItems: `center` }}>
        <Heading sx={{ flex: 1 }}>Tag: {name}</Heading>
        <TLink as={Link} to="/blog" sx={{ variant: `links.icon` }}>
          See all posts
        </TLink>
      </Flex>
      <PostListing posts={nodes} />
    </Layout>
  );
};

export default Blog;
