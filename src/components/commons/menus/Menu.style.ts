import styled from "@emotion/styled";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { css, keyframes } from "@emotion/react";

export const Wrapper = styled.div`
  position: relative;
  > span {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    svg {
      width: 20px;
      height: 20px;
      margin-bottom: 3px;
    }
  }
`;
export const MenuArrow = styled(MdKeyboardDoubleArrowDown)`
  position: absolute;
  right: 0;
  transform: ${(props) => (props.isActive ? "rotate(180deg)" : "rotate(0)")};
`;

export const SebMenuWrap = styled.div`
  animation: ${(props) =>
    props.isActive
      ? css`
          ${SlideAniOpen} .7s ease;
        `
      : ""};
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.isActive ? "100%" : "0")};
  overflow: hidden;
`;
export const SubMenu = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.7;
  height: 35px;
  padding: 10px 20px;
  > span {
    display: inline-block;
    svg {
      margin-bottom: -2px;
    }
  }
`;

// dropdown animation
const SlideAniOpen = keyframes`
  0% {
    height: 0;
  }

  100% {
    height: 100%;
  }
`;
