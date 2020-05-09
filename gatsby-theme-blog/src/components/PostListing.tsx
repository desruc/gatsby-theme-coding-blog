/** @jsx jsx */
import { jsx } from "theme-ui";
import PostExcerpt from "./PostExcerpt";

type Props = {
  posts: {
    title: string;
    slug: string;
    date: string;
    description: string;
  }[];
};

const Listing = ({ posts }: Props) => (
  <section sx={{ mt: [5, 6], fontFamily: `body` }}>
    {posts.map((post) => (
      <PostExcerpt key={post.slug} post={post} />
    ))}
  </section>
);

export default Listing;
