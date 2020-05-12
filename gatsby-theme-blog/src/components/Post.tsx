/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Heading } from "@theme-ui/components";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "./Layout";
import PostTags from "./PostTags";
import PostFooter from "./PostFooter";

type Props = {
  data: {
    post: {
      slug: string;
      title: string;
      date: string;
      timeToRead: number;
      body: string;
      tags: {
        name: string;
        slug: string;
      }[];
    };
  };
  pageContext: {
    next: {
      slug: string;
      title: string;
    };
    previous: {
      slug: string;
      title: string;
    };
  };
};

const Post = ({ data: { post }, pageContext }: Props) => {
  const { next, previous } = pageContext;
  const showPostNavigation = next !== null || previous !== null;

  return (
    <Layout>
      <Heading
        as="h1"
        sx={{
          textTransform: `uppercase`,
          letterSpacing: `0.3rem`,
          fontSize: [4, 5],
        }}
      >
        {post.title}
      </Heading>
      <p>
        <span>{post.date}</span>
        {post.timeToRead && (
          <React.Fragment>
            {` • `}
            <span>{post.timeToRead} minute read</span>
          </React.Fragment>
        )}
        {post.tags && (
          <React.Fragment>
            {` • `}
            <PostTags tags={post.tags} />
          </React.Fragment>
        )}
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      {showPostNavigation && <PostFooter next={next} previous={previous} />}
    </Layout>
  );
};

export default Post;
