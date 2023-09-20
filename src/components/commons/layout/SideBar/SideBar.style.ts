import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion.style";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export const Wrapper = styled.div`
  transition: 0.3s ease-out;
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => (props.isOpen ? "300px" : "100px")};
  height: 100vh;
  background: ${Common.color.dark_default};
  color: #fff;
  padding: ${(props) => (props.isOpen ? "40px" : "40px 20px")};
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.h1`
  margin: 0 auto 100px auto;
  width: 100%;
  height: 20px;
  background-image: url("/images/larmong.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

// Menu
export const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 1.1em;
  text-transform: uppercase;
`;

// Bottom
export const BottomGroup = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: ${(props) => (props.isOpen ? "row" : "column")};
  gap: 30px;
  justify-content: space-between;
  align-items: center;
  > div:last-of-type {
    rotate: ${(props) => (props.isOpen ? "0deg" : "180deg")};
  }
`;

export const Mode = styled.div`
  position: relative;
  width: 100%;
  max-width: 65px;
  height: 30px;
  display: flex;
  align-items: center;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50px;
    border: 2px solid ${Common.color.dark_text};
  }
`;

export const ModePoint = styled.span`
  transition: all 0.3s ease-out;
  position: absolute;
  top: 0;
  left: ${(props) => (props.isMode ? "0%" : "calc(100% - 30px)")};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${Common.color.dark_text};
`;

export const ModeIcon = styled.span`
  transition: all 0.3s ease-out;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: ${Common.color.dark_text};
  svg {
    opacity: 0.8;
    width: 100%;
    height: 100%;
  }
  &.r_icon {
    right: 10px;
  }
  &.d_icon {
    left: 10px;
  }
`;

export const OpenBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 26px;
    height: 26px;
  }
`;
