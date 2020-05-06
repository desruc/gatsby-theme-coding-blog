import { merge } from "theme-ui";
import { swiss, deep } from "@theme-ui/presets";

export default merge(swiss, {
  initialColorModeName: `light`,
  useCustomProperties: true,
  colors: {
    modes: {
      deep: {
        ...deep.colors,
      },
    },
  },
  layout: {
    container: {
      padding: [3, 4],
      maxWidth: `1280px`,
    },
  },
  styles: {
    ...swiss.styles,
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
});
