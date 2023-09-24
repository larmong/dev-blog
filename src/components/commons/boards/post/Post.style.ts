import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion.style";

export const BoardPost = styled.div`
  border-bottom: ${Common.line.post};
  color: ${Common.color.light_darkGray};
  ul {
    display: flex;
    li {
      width: 120px;
      padding: 16px;
      text-align: center;
      &:nth-of-type(1) {
        width: 80px;
      }
      &:nth-of-type(2) {
        //background: rgba(0, 0, 0, 0.1);
        text-align: left;
        width: calc(100% - 200px);
      }
      &:nth-of-type(3) {
        width: 120px;
      }
    }
  }
`;
