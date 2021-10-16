import React, { Children, FC, ReactNode, ReactNodeArray } from "react";
import { styShipperButton } from "./styles";

export interface ButtonProps {
  block?: boolean;
  children: string | number | boolean | {} | ReactNodeArray | ReactNode[];
}

export const Button: FC<ButtonProps> = ({ block = false, children }) => {
  return (
    <button
      {...(block && { "data-block": true })}
      type="button"
      className={styShipperButton}
    >
      {children}
    </button>
  );
};

export default Button;
