/** @jsx jsx */
import { jsx } from "theme-ui";
import { Heading } from "@theme-ui/components";

const NoPosts = () => (
  <Heading
    as="h3"
    sx={{
      color: `primary`,
      textTransform: `Uppercase`,
      letterSpacing: `0.3rem`,
      textAlign: `center`,
      mb: [4, 5],
    }}
  >
    <span sx={{ display: `block` }}>Uh oh!</span>
    <span sx={{ display: `block` }}>It seems there are no posts yet...</span>
    <span sx={{ display: `block` }}>Please come back later.</span>
  </Heading>
);

export default NoPosts;
