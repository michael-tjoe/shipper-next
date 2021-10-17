import { css } from "@emotion/css";
import { N0L, NN100, YN100 } from "@styles/variables/colors";
import { mq } from "@styles/helpers";
import { MD } from "@styles/variables/breakpoints";
import { body2 } from "@styles/base";

export const styAsideWrapper = css`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  padding: 0 20px;
  opacity: 0;
  background: ${N0L};
  z-index: 2;
  height: calc(100% - 70px);
  transition: 0.2s ease-out;
  visibility: hidden;

  &[data-open] {
    visibility: visible;
    opacity: 1;
  }

  ${mq(MD)} {
    width: 25%;
    opacity: 1;
    transform: scale(1);
    visibility: visible;
  }

  > ul {
    padding-top: 48px;

    > li {
      > a {
        position: relative;
        display: grid;
        grid: auto / auto-flow 24px 1fr;
        grid-column-gap: 16px;
        align-items: center;
        text-decoration: none;
        padding: 16px 0;

        p {
          ${body2};
          color: ${NN100};
          font-weight: 600;
        }

        .icon {
          width: 24px;
          height: 24px;
          position: relative;
        }

        &.active {
          p {
            color: ${YN100};
          }
        }
      }
    }
  }
`;
