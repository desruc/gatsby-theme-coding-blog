/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex } from "@theme-ui/components";
import GitHubIcon from "../icons/GitHubIcon";
import InstagramIcon from "../icons/InstagramIcon";

import { useSiteMetadata } from "../hooks/useSiteMetadata";

const Footer = () => {
  // Hooks
  const { author, instagram, gitHub } = useSiteMetadata();

  // Helper constants
  const copyright = `© ${new Date().getFullYear()} ${author}`;

  return (
    <footer sx={{ mt: [3, 4] }}>
      <Flex
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
        }}
      >
        <p>{copyright}</p>
        <div>
          <a sx={{ variant: `links.icon`, mr: 2 }} href={instagram} title="Instagram">
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
