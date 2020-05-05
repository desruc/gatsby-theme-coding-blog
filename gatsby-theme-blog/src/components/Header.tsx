/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import { Link } from "gatsby";
import { Flex } from "@theme-ui/components";

const modes = [`light`, `deep`];

const Header = () => {
  // Hooks
  const [colorMode, setColorMode] = useColorMode();

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
        <Link to="/">
          <h1 sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4] }}>Site Title</h1>
        </Link>
        <button onClick={handleToggle} type="button">
          Toggle colour
        </button>
      </Flex>
    </header>
  );
};

export default Header;
