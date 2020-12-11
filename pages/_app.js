import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "react-multi-carousel/lib/styles.css";
import "../styles/pagination.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
