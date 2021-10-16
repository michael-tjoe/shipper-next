import { mediaQueryValue } from "../variables/breakpoints";

export const ROOT_FONT_SIZE = 14;

export const pxToRem = (px: number) => `${px / ROOT_FONT_SIZE}rem`;

export const mq = (breakpoint: mediaQueryValue) =>
  `@media(min-width: ${breakpoint})`;
