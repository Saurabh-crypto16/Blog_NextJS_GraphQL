import "../styles/globals.scss";
import { Layout } from "../components/index";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
