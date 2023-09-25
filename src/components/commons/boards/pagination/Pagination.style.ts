import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion.style";

export const Wrapper = styled.div`
  text-align: center;
  height: 20px;
  display: flex;
  gap: 5px;
  align-items: center;
  color: ${Common.color.light_darkGray};
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    cursor: pointer;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const FirstPage = styled.span``;
export const LastPage = styled.span``;

export const PrevPage = styled.span``;
export const NextPage = styled.span``;

export const Page = styled.span`
  padding-top: 2px;
  background: ${(props) =>
    props.isActive ? `${Common.color.point}` : "transparent"};
  color: ${(props) =>
    props.isActive ? "#ffffff" : `${Common.color.light_text}`};
`;
