/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Flex } from "@theme-ui/components";

import GitHubIcon from "../icons/GitHubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import InstagramIcon from "../icons/InstagramIcon";

import { useSiteMetadata } from "../hooks/useSiteMetadata";

const Footer = () => {
  // Hooks
  const { siteTitle, author, instagram, gitHub, linkedIn } = useSiteMetadata();

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
    <footer sx={{ mt: [5, 6] }}>
      <Flex sx={{ alignItems: `center`, flexWrap: `wrap` }}>
        <Link to="/" sx={{ color: `text`, textDecoration: `none` }}>
          <h1
            sx={{
              my: 0,
              fontWeight: 700,
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
            fontSize: [1, 2],
            mr: [3],
          }}
        >
          Blog
        </Link>
        {hasLinks && (
          <React.Fragment>
            {nodes.map((node) => (
              <Link
                key={node.slug}
                to={`/${node.slug}`}
                sx={{
                  variant: `links.icon`,
                  textTransform: `uppercase`,
                  letterSpacing: `0.2rem`,
                  fontWeight: 600,
                  fontSize: [1, 2],
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
        <p sx={{ fontSize: 12 }}>{copyright}</p>
        <div sx={{ display: `flex`, alignItems: `center` }}>
          {gitHub && (
            <a href={gitHub} sx={{ display: `flex`, variant: `links.icon`, mr: 3 }} title="Github">
              <GitHubIcon />
            </a>
          )}
          {linkedIn && (
            <a sx={{ display: `flex`, variant: `links.icon`, mr: 3 }} href={linkedIn} title="Instagram">
              <LinkedInIcon />
            </a>
          )}
          {instagram && (
            <a sx={{ display: `flex`, variant: `links.icon` }} href={instagram} title="Instagram">
              <InstagramIcon />
            </a>
          )}
        </div>
      </Flex>
    </footer>
  );
};

export default Footer;
