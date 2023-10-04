import { Global } from "@emotion/react";
import { GlobalStyle } from "../src/common/style/global.style";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Component {...pageProps} />
    </>
  );
}
