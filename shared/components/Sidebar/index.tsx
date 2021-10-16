import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { styAsideWrapper } from "./styles";

interface SidebarProps {
  display: boolean;
}

export const Sidebar: FC<SidebarProps> = ({ display }) => {
  return (
    <aside {...(display && { "data-open": true })} className={styAsideWrapper}>
      <ul>
        <li>
          <Link href="/">
            <a>
              <div className="icon">
                <Image src="/icons/ic-home.svg" alt="" layout="fill" />
              </div>
              <p>Beranda</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/DriverManagement">
            <a>
              <div className="icon">
                <Image src="/icons/ic-calendar.svg" alt="" layout="fill" />
              </div>

              <p>Driver Management</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/Pickup">
            <a>
              <div className="icon">
                <Image src="/icons/ic-user.svg" alt="" layout="fill" />
              </div>

              <p>Pickup</p>
            </a>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
