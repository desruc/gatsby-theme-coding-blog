/** @jsx jsx */
import { jsx } from "theme-ui";
import PostExcerpt from "./PostExcerpt";

type Props = {
  posts: {
    node: {
      id: string;
      frontmatter: {
        title: string;
        slug: string;
        date: string;
        description: string;
      };
    };
  }[];
};

const Listing = ({ posts }: Props) => (
  <section sx={{ mt: [5, 6], fontFamily: `body` }}>
    {posts.map((post) => (
      <PostExcerpt key={post.node.frontmatter.slug} post={post.node.frontmatter} />
    ))}
  </section>
);

export default Listing;
