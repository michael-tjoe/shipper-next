import React, { FC } from "react";
import { useRouter } from "next/router";
import SiderbarItem from "./SiderbarItem";
import { styAsideWrapper } from "./styles";

interface SidebarProps {
  display: boolean;
  onClickMenu: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ display, onClickMenu }) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <aside {...(display && { "data-open": true })} className={styAsideWrapper}>
      <ul>
        <li>
          <SiderbarItem
            onClick={onClickMenu}
            path="/"
            image="/icons/ic-home.svg"
            title="Beranda"
            isActive={currentPath === "/"}
          />
        </li>
        <li>
          <SiderbarItem
            onClick={onClickMenu}
            path="/DriverManagement"
            image="/icons/ic-user.svg"
            title="Driver Management"
            isActive={currentPath === "/DriverManagement"}
          />
        </li>
        <li>
          <SiderbarItem
            onClick={onClickMenu}
            path="/Pickup"
            image="/icons/ic-calendar.svg"
            title="Pickup"
            isActive={currentPath === "/Pickup"}
          />
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
