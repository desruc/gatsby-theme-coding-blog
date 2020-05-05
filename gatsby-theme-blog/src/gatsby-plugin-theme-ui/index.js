import { merge } from "theme-ui";
import { swiss, deep } from "@theme-ui/presets";

export default merge(swiss, {
  initialColorModeName: `light`,
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
      maxWidth: `1024px`,
    },
  },
  styles: {
    ...swiss.styles,
  },
});
