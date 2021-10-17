import React, { FC, ReactNode, ReactNodeArray } from "react";
import noop from "@helpers/noop";
import { styShipperButton } from "./styles";

export interface ButtonProps {
  block?: boolean;
  children: string | number | boolean | {} | ReactNodeArray | ReactNode[];
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  block = false,
  children,
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
    </button>
  );
};

export default Button;
