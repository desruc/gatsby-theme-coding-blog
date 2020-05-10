import { graphql } from "gatsby";

import TagComponent from "../components/Tag";

export default TagComponent;

export const query = graphql`
  query($slug: String!) {
    allPost(sort: { fields: date, order: DESC }, filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
      nodes {
        slug
        title
        date
        description
        tags {
          name
          slug
        }
      }
    }
  }
`;
