/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Flex } from "@theme-ui/components";
import GitHubIcon from "../icons/GitHubIcon";
import InstagramIcon from "../icons/InstagramIcon";

import { useSiteMetadata } from "../hooks/useSiteMetadata";

const Footer = () => {
  // Hooks
  const { siteTitle, author, instagram, gitHub } = useSiteMetadata();

  // GraphQl query to get page links
  const {
    allPage: { nodes },
  } = useStaticQuery(graphql`
    query {
      allPage(filter: { navigation: { eq: true } }) {
        nodes {
          slug
          title
        }
      }
    }
  `);

  // Helper constants
  const copyright = `© ${new Date().getFullYear()} ${author}`;
  const hasLinks = nodes.length > 0;

  return (
    <footer sx={{ mt: [3, 4] }}>
      <Flex sx={{ alignItems: `center`, flexWrap: `wrap` }}>
        <Link to="/" sx={{ color: `text`, textDecoration: `none` }}>
          <h1
            sx={{
              my: 0,
              fontWeight: `medium`,
              fontSize: [1, 2],
              letterSpacing: `0.2rem`,
              display: `inline`,
              transition: `all 0.3s ease-in-out`,
            }}
          >
            {siteTitle}
          </h1>
        </Link>
        <span sx={{ mr: [3], ml: [3], userSelect: `none` }}>//</span>
        <Link
          to="/blog"
          sx={{
            variant: `links.icon`,
            textTransform: `uppercase`,
            letterSpacing: `0.2rem`,
            fontWeight: 600,
            mr: [3],
          }}
        >
          Blog
        </Link>
        {hasLinks && (
          <React.Fragment>
            {nodes.map((node) => (
              <Link
                to={`/${node.slug}`}
                sx={{
                  variant: `links.icon`,
                  textTransform: `uppercase`,
                  letterSpacing: `0.2rem`,
                  fontWeight: 600,
                }}
              >
                {node.title}
              </Link>
            ))}
          </React.Fragment>
        )}
      </Flex>
      <Flex
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
        }}
      >
        <p>{copyright}</p>
        <div>
          <a sx={{ variant: `links.icon`, mr: 3 }} href={instagram} title="Instagram">
            <InstagramIcon />
          </a>
          <a href={gitHub} sx={{ variant: `links.icon` }} title="Github">
            <GitHubIcon />
          </a>
        </div>
      </Flex>
    </footer>
  );
};

export default Footer;
