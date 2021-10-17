import { css } from "@emotion/css";
import { YN100, NN200, N0L } from "@styles/variables/colors";
import { mq } from "@styles/helpers";
import { LG } from "@styles/variables/breakpoints";
import { main1 } from "@styles/base";

export const styMainCard = css`
  margin-top: 24px;
  display: grid;
  align-items: center;
  background: ${N0L};
  padding: 24px 16px;
  border-radius: 4px;
  grid: auto-flow auto / 1fr;
  grid-gap: 24px;

  .title {
    > h1 {
      text-transform: uppercase;
      color: ${YN100};
      ${main1};
    }

    > p {
      color: ${NN200};
    }
  }

  ${mq(LG)} {
    grid: auto / auto-flow 800px 1fr;
  }
`;
