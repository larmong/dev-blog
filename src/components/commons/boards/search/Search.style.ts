import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion.style";

export const Wrapper = styled.div`
  display: flex;
`;

export const SearchBar = styled.input`
  transition: all 0.3s ease-out;
  width: 150px;
  height: 100%;
  padding: 4px 10px;
  border-radius: 5px 0 0 5px;
  &:focus {
    width: 300px;
  }
`;

export const SearchBtn = styled.button`
  width: 50px;
  height: 100%;
  color: ${Common.color.light_default};
  background: ${Common.color.light_darkGray};
  margin-left: -1px;
  border-radius: 0 5px 5px 0;
`;
