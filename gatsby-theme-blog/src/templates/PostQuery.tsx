import { graphql } from "gatsby";

import PostComponent from "../components/Post";

export default PostComponent;

export const query = graphql`
  query($slug: String!) {
    post(slug: { eq: $slug }) {
      slug
      title
      date
      timeToRead
      body
      tags {
        name
        slug
      }
    }
  }
`;
