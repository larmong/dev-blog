import { AppProps } from "next/app";
import { GlobalStyle } from "../src/commons/style/global.style";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import { Layout } from "../src/commons/layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>Dev Blog | larmong</title>
        <link
          rel="icon"
          href="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FxPNUb%2FbtrE4UUTw8j%2FqbN9aFF837QgTvNIi1shT1%2Fimg.png"
        />
      </Head>
      <Global styles={GlobalStyle} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
