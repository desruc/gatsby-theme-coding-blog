/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box, Heading } from "@theme-ui/components";
import { Link } from "gatsby";

import PostTags from "./PostTags";

type Props = {
  post: {
    title: string;
    slug: string;
    date: string;
    description: string;
    tags: {
      name: string;
      slug: string;
    }[];
  };
};

const PostExcerpt = ({ post }: Props) => {
  const { title, slug, date, description, tags } = post;
  return (
    <Box sx={{ mb: [4, 5], fontFamily: `body` }}>
      <Link sx={{ color: `text`, textDecoration: `none` }} to={`/blog/${slug}`}>
        <Heading
          as="h3"
          sx={{
            mb: [2],
            color: `primary`,
            textTransform: `Uppercase`,
            letterSpacing: `0.3rem`,
            display: `inline-block`,
          }}
        >
          {title}
        </Heading>
      </Link>
      <div sx={{ mb: [2] }}>
        <small>
          {date}
          {tags && (
            <span>
              {` • `} <PostTags tags={tags} />
            </span>
          )}
        </small>
      </div>
      <p sx={{ mb: [2], mt: 0, fontSize: [1] }}>{description}</p>
    </Box>
  );
};

export default PostExcerpt;
