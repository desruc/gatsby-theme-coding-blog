import { graphql } from "gatsby";

import BlogComponent from "../components/Blog";

export default BlogComponent;

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allPost(sort: { fields: date, order: DESC }, limit: $limit, skip: $skip) {
      nodes {
        slug
        title
        description
        date
        tags {
          name
          slug
        }
      }
    }
  }
`;
