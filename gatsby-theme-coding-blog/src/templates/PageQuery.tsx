import { graphql } from "gatsby";

import PageComponent from "../components/Page";

export default PageComponent;

export const query = graphql`
  query($slug: String!) {
    page(slug: { eq: $slug }) {
      title
      slug
      body
    }
  }
`;
