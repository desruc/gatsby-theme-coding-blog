import { graphql } from "gatsby";

import BlogComponent from "../components/Blog";

export default BlogComponent;

export const query = graphql`
  query {
    allPost(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        title
        description
        date
      }
    }
  }
`;
