/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex } from "@theme-ui/components";
import { Link } from "gatsby";

type Props = {
  next: {
    slug: string;
    title: string;
  };
  previous: {
    slug: string;
    title: string;
  };
};

const PostFooter = ({ next, previous }: Props) => {
  const hasNext = next !== null;
  const hasPrevious = previous !== null;

  return (
    <Flex
      sx={{
        mt: [5],
        mb: [4],
        alignItems: `center`,
        justifyContent: hasPrevious ? `space-between` : `flex-end`,
      }}
    >
      {hasPrevious && (
        <Link to={`/blog/${previous.slug}`} sx={{ variant: `links.icon` }}>{`Previous: ${previous.title}`}</Link>
      )}
      {hasNext && <Link to={`/blog/${next.slug}`} sx={{ variant: `links.icon` }}>{`Next: ${next.title}`}</Link>}
    </Flex>
  );
};

export default PostFooter;
