import { css } from "@emotion/css";
import { YN100, N0 } from "@styles/variables/colors";

export const styShipperButton = css`
  display: block;
  background-color: ${YN100};
  color: ${N0};
  padding: 16px 20px;
  outline: none;
  border: none;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;

  &[data-block] {
    width: 100%;
  }
`;
