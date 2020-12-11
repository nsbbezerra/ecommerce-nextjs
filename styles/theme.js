import { theme, extendTheme } from "@chakra-ui/react";
import configs from "../configs/configs";

const customTheme = extendTheme({
  ...theme,
  breakpoints: ["30em", "48em", "52em", "62em", "80em"],
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Acme, sans-serif",
    mono: "Menlo, monospaced",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: "3px",
    md: "5px",
  },
  colors: {
    ...theme.colors,
    yellow: {
      ...theme.colors.yellow,
      400: configs.colors.primary,
    },
    gray: {
      ...theme.colors.gray,
      900: configs.colors.dark,
    },
    red: {
      ...theme.colors.red,
      600: configs.colors.red,
    },
    pink: {
      ...theme.colors.pink,
      200: configs.colors.pink,
    },
    green: {
      ...theme.colors.green,
      300: configs.colors.green,
    },
  },
});

export default customTheme;
