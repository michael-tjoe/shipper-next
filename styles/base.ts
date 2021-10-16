import { css } from "@emotion/css";
import { pxToRem } from "./helpers";
import { XL } from "./variables/breakpoints";

export const styContainer = css`
  padding: 0 20px;
  margin: 0 auto;
  max-width: ${XL};
`;

export const styRow = css`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const body1 = css`
  font-size: ${pxToRem(22)};
  line-height: 1.4;
`;

export const body2 = css`
  font-size: ${pxToRem(16)};
  line-height: 1.15;
`;
