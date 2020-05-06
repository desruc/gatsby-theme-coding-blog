/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex } from "@theme-ui/components";

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
          <a sx={{ mr: 2 }} href={instagram}>
            Instagram
          </a>
          <a href={gitHub}>GitHub</a>
        </div>
      </Flex>
    </footer>
  );
};

export default Footer;
