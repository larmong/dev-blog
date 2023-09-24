import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion.style";

export const Wrapper = styled.div`
  //border: 1px solid #000;
  font-size: 0.8em;
`;

export const BoardTitle = styled.span`
  display: block;
  margin-bottom: 30px;
  font-size: 2em;
  text-align: center;
  text-transform: uppercase;
  color: ${Common.color.light_text};
  font-weight: 700;
`;

// BoardHead
export const BoardHead = styled.div`
  background: rgba(0, 0, 0, 0.03);
  font-weight: 700;
  border-top: ${Common.line.board};
  border-bottom: ${Common.line.board};

  ul {
    display: flex;
    li {
      padding: 16px;
      text-align: center;
      &:nth-of-type(1) {
        width: 80px;
      }
      &:nth-of-type(2) {
        width: calc(100% - 200px);
      }
      &:nth-of-type(3) {
        width: 120px;
      }
    }
  }
`;

// BoardBody
export const BoardBody = styled.div``;

// BoardBottom
export const BoardBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  margin: 34px 0;
  > div {
    height: 30px;
  }
`;
