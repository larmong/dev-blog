import * as L from "../../components/commons/layout/Layout.style";
import { SideBar } from "../../components/commons/layout/SideBar/SideBar.container";
import { useRecoilState } from "recoil";
import { isOpenState } from "../store/store";

interface ILayoutProps {
  children: JSX.Element;
}

export const Layout = (props: ILayoutProps) => {
  const [isOpen] = useRecoilState(isOpenState);

  return (
    <L.Wrapper>
      <SideBar />
      <L.Contents isOpen={isOpen}>
        <L.Page>{props.children}</L.Page>
        <L.Copy>Copyright ⓒ 2023 All rights reserved by larmong.</L.Copy>
      </L.Contents>
    </L.Wrapper>
  );
};
