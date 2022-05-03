import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import "@fontsource/nunito"
import "@fontsource/sen"
import useLocoScroll from "../utils/useLoco";
import "locomotive-scroll/src/locomotive-scroll.scss";
import {ChakraProvider, extendTheme, withDefaultColorScheme, ThemeConfig} from "@chakra-ui/react";
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const containerRef = React.useRef(null);
  useLocoScroll(true);

  return (
    <ChakraProvider theme={theme}>
        <div data-scroll-container ref={containerRef} id="main-container">
          <Component {...pageProps} />
        </div>
    </ChakraProvider>
  )
}

export default MyApp
