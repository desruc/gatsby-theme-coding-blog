/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import { Link } from "gatsby";
import { Flex } from "@theme-ui/components";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import ThemeSwitch from "./ThemeSwitch";

const modes = [`light`, `deep`];

const Header = () => {
  // Hooks
  const [colorMode, setColorMode] = useColorMode();
  const { siteTitle } = useSiteMetadata();

  // Event handlers
  const handleToggle = () => {
    const index = modes.indexOf(colorMode);
    const next = modes[(index + 1) % modes.length];
    setColorMode(next);
  };

  return (
    <header sx={{ mb: [5, 6], fontFamily: `body` }}>
      <Flex
        sx={{
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
        }}
      >
        <div>
          <Link to="/" sx={{ color: `text`, textDecoration: `none` }}>
            <h1
              sx={{
                my: 0,
                fontWeight: `medium`,
                fontSize: [1, 2],
                letterSpacing: `0.2rem`,
                display: `inline`,
              }}
            >
              {siteTitle}
            </h1>
          </Link>
          <span sx={{ mr: [2], ml: [2], userSelect: `none` }}>//</span>
          <Link
            to="/blog"
            sx={{
              variant: `links.icon`,
              textTransform: `uppercase`,
              letterSpacing: `0.2rem`,
              fontWeight: 600,
            }}
          >
            Blog
          </Link>
        </div>
        <ThemeSwitch changeTheme={handleToggle} />
      </Flex>
    </header>
  );
};

export default Header;
