/** @jsx jsx */
import { jsx } from "theme-ui";
import { Heading } from "@theme-ui/components";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "./Layout";

type Props = {
  data: {
    page: {
      slug: string;
      title: string;
      body: string;
    };
  };
};

const Page = ({ data: { page } }: Props) => (
  <Layout>
    {page.title && (
      <Heading
        as="h1"
        sx={{
          textTransform: `uppercase`,
          letterSpacing: `0.3rem`,
          fontSize: [4, 5],
        }}
      >
        {page.title}
      </Heading>
    )}
    <MDXRenderer>{page.body}</MDXRenderer>
  </Layout>
);

export default Page;
