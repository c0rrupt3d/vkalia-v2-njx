import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { colors } from "./colors";
import { breakpoints } from "./breakpoints";
import { Button } from "./components/Button";
import {Drawer} from "./components/Drawer";
import { Text, Heading, textStyles } from "./typography";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  cssVarPrefix: "vk",
};

const styles = {
  global: (props: any) => ({
    body: {
      overflowX: "hidden",
      color: mode("material.0", "material.1")(props),
      bg: mode("bg.light", "bg.dark")(props),
    },
  }),
};



const theme = extendTheme(
  {
    breakpoints,
    colors,
    styles,
    config,
    textStyles,
    fonts :{
      heading: "Sen",
      body: "Nunito",
    },
    
    shadows :{
      outline: "gray.100",
    },
    components: {
      Button,
      Heading,
      Text,
      Drawer,
    },
  },
  withDefaultColorScheme({ colorScheme: "magneto" })
);

export default theme;
