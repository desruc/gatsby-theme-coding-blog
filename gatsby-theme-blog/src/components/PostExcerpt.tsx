/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { Box, Heading } from "@theme-ui/components";

type Props = {
  post: {
    title: string;
    slug: string;
    date: string;
    description: string;
  };
};

const PostExcerpt = ({ post }: Props) => {
  const { title, slug, date, description } = post;
  return (
    <Box sx={{ mb: [3, 4], fontFamily: `body` }}>
      <Link sx={{ color: `text`, textDecoration: `none` }} to={`/blog/${slug}`}>
        <Heading as="h3" sx={{ color: `primary` }}>
          {title}
        </Heading>
      </Link>
      <small>{date}</small>
      <p sx={{ marginTop: 0 }}>{description}</p>
    </Box>
  );
};

export default PostExcerpt;
