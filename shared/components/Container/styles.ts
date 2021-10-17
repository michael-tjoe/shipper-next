import { css } from "@emotion/css";
import { mq } from "@styles/helpers";
import { MD } from "@styles/variables/breakpoints";

export const styLayoutContainer = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;

  main {
    flex-grow: 1;
    display: flex;

    .content {
      background-color: #ebedef;
      padding: 20px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      ${mq(MD)} {
        padding: 48px;
        margin-left: 25%;
      }
    }
  }
`;
