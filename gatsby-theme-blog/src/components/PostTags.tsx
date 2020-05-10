import React from "react";
import { Link as TLink } from "theme-ui";
import { Link } from "gatsby";

type Props = {
  tags: {
    name: string;
    slug: string;
  }[];
};

const PostTags = ({ tags }: Props) => (
  <>
    {tags.map((tag, i) => (
      <React.Fragment key={tag.slug}>
        {!!i && `, `}
        <TLink as={Link} to={`/tags/${tag.slug}`} sx={{ variant: `links.icon` }}>
          {tag.name}
        </TLink>
      </React.Fragment>
    ))}
  </>
);

export default PostTags;
