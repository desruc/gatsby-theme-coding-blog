import { merge } from "theme-ui";
import { swiss } from "@theme-ui/presets";

export default merge(swiss, {
  initialColorModeName: `light`,
  useCustomProperties: true,
  colors: {
    text: `#2b2c34`,
    background: `#fffffe`,
    primary: `#6246ea`,
    seconday: `#e45858`,
    accent: `#d1d1e9`,
    highlight: `#ff8906`,
    muted: `#094067`,
    heading: `#2b2c34`,
    modes: {
      green: {
        text: `#abd1c6`,
        background: `#004643`,
        primary: `#f9bc60`,
        seconday: `#abd1c6`,
        accent: `#f9bc60`,
        highlight: `#f9bc60`,
        muted: `#001e1d`,
        heading: `#fffffe`,
      },
      dark: {
        text: `#a7a9be`,
        background: `#0f0e17`,
        primary: `#e53170`,
        seconday: `#f25f4c`,
        accent: `#ff8906`,
        highlight: `#ff8906`,
        muted: `#094067`,
        heading: `#fffffe`,
      },
    },
  },
  layout: {
    container: {
      padding: [3, 4],
      maxWidth: `1280px`,
    },
  },
  text: {
    heading: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      lineHeight: `heading`,
      color: `heading`,
    },
  },
  buttons: {
    transparent: {
      color: `inherit`,
      bg: `transparent`,
      transition: `all 0.3s ease-in-out`,
      border: `none`,
      "&:hover, &:focus": {
        borderRadius: `50%`,
        color: `primary`,
        outline: `none`,
        boxShadow: `0 0 0 2px`,
        cursor: `pointer`,
      },
    },
  },
  links: {
    icon: {
      color: `text`,
      textDecoration: `none`,
      transition: `all 0.2s ease-in-out`,
      "&:hover, &:focus": {
        color: `primary`,
      },
    },
  },
  styles: {
    ...swiss.styles,
    root: {
      color: `text`,
      backgroundColor: `background`,
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
    },
    p: {
      fontSize: [1, 1, 2],
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
    },
    ul: {
      li: {
        fontSize: [1, 1, 2],
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
      },
    },
    ol: {
      li: {
        fontSize: [1, 1, 2],
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
      },
    },
    h1: {
      variant: `text.heading`,
      fontSize: [5, 6, 7],
      letterSpacing: `0.3rem`,
      textTransform: `uppercase`,
      mt: 2,
    },
    h2: {
      variant: `text.heading`,
      fontSize: [4, 5, 6],
      letterSpacing: `0.3rem`,
      textTransform: `uppercase`,
      mt: 2,
    },
    h3: {
      variant: `text.heading`,
      fontSize: [3, 4, 5],
      letterSpacing: `0.3rem`,
      textTransform: `uppercase`,
      mt: 3,
    },
    h4: {
      variant: `text.heading`,
      letterSpacing: `0.3rem`,
      textTransform: `uppercase`,
      fontSize: [2, 3, 4],
    },
    h5: {
      variant: `text.heading`,
      letterSpacing: `0.3rem`,
      textTransform: `uppercase`,
      fontSize: [1, 2, 3],
    },
    h6: {
      variant: `text.heading`,
      letterSpacing: `0.3rem`,
      textTransform: `uppercase`,
      fontSize: 1,
      mb: 2,
    },
    blockquote: {
      borderLeftColor: `primary`,
      borderLeftStyle: `solid`,
      borderLeftWidth: `6px`,
      mx: 0,
      pl: 4,
      p: {
        fontStyle: `italic`,
      },
    },
  },
});
