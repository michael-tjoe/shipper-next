import { css } from "@emotion/css";
import { YN100, NN100, NN200, NN300, N0L } from "@styles/variables/colors";
import { mq } from "@styles/helpers";
import { MD, XL } from "@styles/variables/breakpoints";
import { body2, body3 } from "@styles/base";

export const styCardWrapper = css`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background: ${N0L};

  .header {
    display: flex;
    padding: 12px;
    border-bottom: 2px solid ${NN300};

    > p {
      color: ${NN200};
      ${body2};

      strong {
        font-weight: 400;
        color: ${YN100};
        text-transform: uppercase;
      }
    }
  }

  .driver-info {
    display: flex;
    align-items: center;
    column-gap: 24px;
    padding: 8px 16px 16px 16px;

    ${mq(MD)} {
      flex-direction: column;
      align-items: start;
      padding: 24px;
    }

    .photo {
      flex-shrink: 0;
      position: relative;
      width: 72px;
      height: 72px;
      border-radius: 50%;
      overflow: hidden;
    }

    .driver-data {
      flex-grow: 1;
      overflow: hidden;

      ${mq(MD)} {
        margin-top: 24px;
      }

      dt,
      dd {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      dt {
        margin-top: 8px;
        color: ${NN200};
        ${body3};

        &[data-hidden] {
          display: none;

          + dd {
            display: none;
          }

          ${mq(MD)} {
            display: block;

            + dd {
              display: block;
            }
          }
        }
      }

      dd {
        color: ${NN100};
        font-weight: 600;
        ${body3};
      }
    }
  }
`;
