/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { Flex, Heading } from "@theme-ui/components";
import Layout from "./Layout";
import PostListing from "./PostListing";
import NoPosts from "./NoPosts";

import Hero from "../texts/homepage-hero";

type Props = {
  data: {
    allPost: any;
    [key: string]: string;
  };
};

const Homepage = ({ data: { allPost } }: Props) => {
  const { nodes } = allPost;
  const hasPosts = nodes.length > 0;
  return (
    <Layout>
      <section sx={{ mb: [5, 5, 6], p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <Hero />
      </section>
      <Flex sx={{ mb: [4, 5], alignItems: `center` }}>
        <Heading
          sx={{
            flex: 1,
            fontSize: [2, 3],
            letterSpacing: `0.3rem`,
            textTransform: `uppercase`,
          }}
        >
          Recent Thoughts
        </Heading>
        {hasPosts && (
          <Link to="/blog" sx={{ variant: `links.icon`, fontSize: [1, 2] }}>
            See all posts
          </Link>
        )}
      </Flex>
      {hasPosts ? <PostListing posts={nodes} /> : <NoPosts />}
    </Layout>
  );
};

export default Homepage;
