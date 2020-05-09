/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { Flex, Heading } from "@theme-ui/components";
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
      {/* Conditionally render user text */}
      <Flex sx={{ mb: [3], alignItems: `center` }}>
        <Heading sx={{ flex: 1 }}>Recent Posts</Heading>
        <Link to="/blog" sx={{ variant: `links.icon` }}>
          All posts
        </Link>
      </Flex>
      <PostListing posts={nodes} />
    </Layout>
  );
};

export default Homepage;
