import styled from "@emotion/styled";
import { Common } from "../../../commons/style/emotion.style";

export const Wrapper = styled.div`
  display: flex;
`;
export const Contents = styled.div`
  transition: 0.3s ease-out;
  min-height: 100vh;
  background: ${Common.color.light_default};
  margin-left: ${(props) => (props.isOpen ? "300px" : "100px")};
  width: ${(props) =>
    props.isOpen ? "calc(100vw - 300px)" : "calc(100vw - 100px)"};
  padding: 40px 40px 15px 40px;
`;

export const Page = styled.div`
  min-height: calc(100% - 38px);
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
export const Copy = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  font-size: 0.7em;
  margin-top: 10px;
  opacity: 0.8;
`;
