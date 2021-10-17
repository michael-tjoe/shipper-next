import { css } from "@emotion/css";
import { YN100, N0L } from "@styles/variables/colors";

export const styShipperButton = css`
  display: flex;
  align-items: center;
  background-color: ${YN100};
  color: ${N0L};
  padding: 16px 20px;
  outline: none;
  border: none;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;

  .icon {
    position: relative;
    width: 16px;
    height: 16px;
    margin-left: 16px;
  }

  &[data-block] {
    width: 100%;
  }
`;
