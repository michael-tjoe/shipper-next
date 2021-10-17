import React, { FC, ReactNode, ReactNodeArray } from "react";
import Image from "next/image";
import noop from "@helpers/noop";
import { styShipperButton } from "./styles";

export interface ButtonProps {
  block?: boolean;
  children: string | number | boolean | {} | ReactNodeArray | ReactNode[];
  onClick?: () => void;
  icon?: string;
}

export const Button: FC<ButtonProps> = ({
  block = false,
  children,
  icon = "",
  onClick = noop,
}) => {
  return (
    <button
      {...(block && { "data-block": true })}
      type="button"
      className={styShipperButton}
      onClick={onClick}
    >
      {children}

      {icon && (
        <div className="icon">
          <Image alt="" src={icon} layout="fill" />
        </div>
      )}
    </button>
  );
};

export default Button;
