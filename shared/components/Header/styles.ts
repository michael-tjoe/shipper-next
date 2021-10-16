import { css } from "@emotion/css";
import { N0L, NN100, YN100 } from "@styles/variables/colors";
import { mq } from "@styles/helpers";
import { MD } from "@styles/variables/breakpoints";
import { body2 } from "@styles/base";

export const styBurgerButton = css`
  height: 32px;
  width: 32px;
  position: relative;
  top: -3px;
  border: none;
  padding: 0;
  margin: 0;
  outline: 0;
  margin-right: 20px;
  background-color: transparent;
  cursor: pointer;

  ${mq(MD)} {
    display: none;
  }

  .mobile-button {
    padding: 17px 3px 15px;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 32px;
    height: 32px;

    > span {
      position: relative;
      display: block;
      width: 32px;
      height: 4px;
      background: rgb(128, 128, 128);
      transition: all 0.4s ease 0s;
      float: right;

      &:before,
      &:after {
        content: "";
        display: block;
        height: 4px;
        right: 0px;
        background: inherit;
        position: absolute;
        transition: all 0.4s ease 0s;
      }

      &:before {
        top: -9px;
        width: 32px;
        transform: rotate(0deg);
      }

      &:after {
        bottom: -9px;
        width: 32px;
        transform: rotate(0deg);
      }
    }

    &[data-open] {
      > span {
        width: 0px;

        &:before {
          top: 0px;
          transform: rotate(45deg);
        }
        &:after {
          bottom: 0px;
          transform: rotate(-45deg);
        }
      }
    }
  }
`;

export const styHeaderWrapper = css`
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  background-color: ${N0L};

  .logo {
    display: flex;
    align-items: center;
  }

  .user-info {
    display: flex;
    align-items: center;

    > p {
      margin-right: 16px;
      display: none;
      font-weight: 600;
      color: ${NN100};
      ${body2};

      ${mq(MD)} {
        display: block;
      }

      strong {
        color: ${YN100};
      }
    }

    .profile-picture {
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
`;
