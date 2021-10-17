import React, { FC, useState } from "react";
import Image from "next/image";
import { styHeaderWrapper, styBurgerButton } from "./styles";

interface HeaderProps {
  showMobileNav: boolean;
  onClickMobileButton: () => void;
}

export const Header: FC<HeaderProps> = ({
  showMobileNav,
  onClickMobileButton,
}) => {
  return (
    <header className={styHeaderWrapper}>
      <div className="logo">
        <button
          onClick={onClickMobileButton}
          aria-label="sidebar"
          className={styBurgerButton}
          type="button"
        >
          <div
            {...(showMobileNav && { ["data-open"]: true })}
            className="mobile-button"
          >
            <span />
          </div>
        </button>
        <Image src="/logo.png" alt="shipper logo" width={128} height={29} />
      </div>

      <div className="user-info">
        <p>
          Hello, <strong>Shipper User</strong>
        </p>
        <div className="profile-picture">
          <Image
            src="/placeholder-user.jpeg"
            alt="shipper logo"
            layout="fill"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
