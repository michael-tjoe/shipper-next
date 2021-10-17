import { css } from "@emotion/css";
import { YN100, NN200, N0L } from "@styles/variables/colors";
import { mq } from "@styles/helpers";
import { MD, LG, XL } from "@styles/variables/breakpoints";
import { main1, body2 } from "@styles/base";

export const styDriverHeader = css`
  display: grid;
  align-items: center;
  background: ${N0L};
  padding: 24px 16px;
  border-radius: 4px;
  grid: auto-flow auto / 1fr;
  grid-gap: 24px;

  .btn-group {
    display: grid;
    align-items: center;
    grid: auto-flow auto / 1fr;
    grid-gap: 16px;
  }

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
    grid: auto / auto-flow 320px 1fr;

    .btn-group {
      margin-left: auto;
    }
  }

  ${mq(XL)} {
    grid: auto / auto-flow 320px 1fr;

    .btn-group {
      grid: auto / auto-flow 1fr 1fr;
      margin-left: auto;
    }
  }
`;

export const stySearchWrapper = css`
  border-radius: 4px;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  transition: border-color 280ms ease 0s;
  width: 100%;
  height: auto;
  background-color: ${N0L};
  border: 1px solid ${NN200};
  width: 100%;

  > button {
    border: none;
    outline: none;
    position: relative;
    cursor: pointer;
    padding: 0px;
    transition: background-color 280ms ease 0s;
    width: 40px;
    background-color: transparent;
    flex: 0 0 auto;

    &:after {
      content: "";
      background-size: 20px;
      background-image: url(/icons/ic-search.svg);
      background-repeat: no-repeat;
      background-position: center center;
      position: absolute;
      inset: 0px;
    }
  }

  > input {
    min-width: 0px;
    min-height: 0px;
    width: 100%;
    color: ${NN200};
    font-family: inherit;
    background-color: transparent;
    line-height: 22px;
    border: none;
    outline: none;
    height: auto;
    font-size: 14px;
    padding: 13px 12px 13px 0;
  }
`;
export const styDriverCardWrapper = css`
  flex-grow: 1;
  max-height: 100%;
  overflow: auto;
`;

export const styDriverCardList = css`
  display: grid;

  grid: auto-flow auto / 1fr;
  grid-gap: 24px;
  margin-top: 32px;
  overflow: auto;

  ${mq(MD)} {
    margin-right: -48px;
    padding-right: 48px;
    grid: auto / auto-flow minmax(320px, 400px);
  }

  ${mq(LG)} {
    margin-right: -48px;
    padding-right: 48px;
    grid: auto / auto-flow minmax(320px, 400px);
    grid-gap: 48px;
  }
`;

export const styButtonNav = css`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;

  > button {
    width: 100%;
    height: 48px;
  }

  ${mq(LG)} {
    margin-top: 24px;
    flex-direction: row-reverse;
    column-gap: 16px;

    > button {
      cursor: pointer;
      padding: 16px;
      position: relative;
      background: transparent;
      border: none;
      width: auto;
      ${body2};

      &:disabled {
        cursor: not-allowed;

        &:before,
        &:after {
          opacity: 0.2;
        }
      }

      &:before {
        content: "";
        width: 24px;
        height: 24px;
        position: absolute;
        background: url("/icons/ic-arrow.svg");
        background-size: 14px;
        background-repeat: no-repeat;
        background-position: center center;
        top: 15px;
      }

      &.next {
        &:before {
          right: -10px;
        }
      }

      &.prev {
        &:before {
          left: -10px;
          transform: rotate(180deg);
        }
      }
    }
  }
`;
