import type { AppProps } from "next/app";
import React from "react";
import ShipperContainer from "@shared/components/Container";
import "@styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShipperContainer>
      <Component {...pageProps} />
    </ShipperContainer>
  );
}

export default MyApp;
