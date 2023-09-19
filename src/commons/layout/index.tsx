import styled from "@emotion/styled";
import { SideBar } from "../../components/commons/layout/SideBar/SideBar.container";

interface ILayoutProps {
  children: JSX.Element;
}

export const Wrapper = styled.div`
  display: flex;
`;
const Contents = styled.div`
  min-height: 100vh;
  background: #f3f3f3;
  margin-left: 300px;
  width: calc(100vw - 300px);
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

export const Layout = (props: ILayoutProps) => {
  return (
    <Wrapper>
      <SideBar />
      <Contents>
        <Page>{props.children}</Page>
        <Copy>Copyright ⓒ 2023 All rights reserved by larmong.</Copy>
      </Contents>
    </Wrapper>
  );
};
