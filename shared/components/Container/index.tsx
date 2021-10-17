import React, { FC, ReactNode, useState } from "react";
import Header from "@shared/components/Header";
import { Sidebar } from "@shared/components/Sidebar";
import "@styles/global";

interface ShipperContainerProps {
  children: ReactNode;
}

export const ShipperContainer: FC<ShipperContainerProps> = ({ children }) => {
  const [displaySidebar, setDisplaySidebar] = useState(false);

  const handleToggleSidebar = () => {
    setDisplaySidebar(!displaySidebar);
  };

  const handleCloseSidebar = () => {
    if (displaySidebar) {
      setDisplaySidebar(false);
    }
  };

  return (
    <div className="app">
      <Header
        showMobileNav={displaySidebar}
        onClickMobileButton={handleToggleSidebar}
      />

      <main>
        <Sidebar onClickMenu={handleCloseSidebar} display={displaySidebar} />
        <div className="content">{children}</div>
      </main>
    </div>
  );
};

export default ShipperContainer;
