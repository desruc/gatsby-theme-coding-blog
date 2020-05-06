import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteImage
          author
          instagram
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
