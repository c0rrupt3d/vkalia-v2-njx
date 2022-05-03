import Document, { Html, Head, Main, NextScript } from "next/document";
import {ColorModeScript} from "@chakra-ui/react"
import theme from "../styles/theme";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }


  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.webp" />
          <meta name="description" content="A new way to communicate" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
