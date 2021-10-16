import type { AppProps } from "next/app";
import React, { useState } from "react";
import Header from "@shared/components/Header";
import Aside, { Sidebar } from "@shared/components/Sidebar";
import "@styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  const [displaySidebar, setDisplaySidebar] = useState(false);

  const handleToggleSidebar = () => {
    setDisplaySidebar(!displaySidebar);
  };

  return (
    <div className="app">
      <Header
        showMobileNav={displaySidebar}
        onClickMobileButton={handleToggleSidebar}
      />

      <main>
        <Sidebar display={displaySidebar} />
        <div className="content">
          <Component />
        </div>
      </main>
    </div>
  );
}
export default MyApp;
