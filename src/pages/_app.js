import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

import { Layout } from "../components";
import "../styles/globals.scss";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
