import * as S from "./SideBar.style";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { LuArrowLeftToLine } from "react-icons/lu";
import { useRecoilState } from "recoil";
import { isModeState, isOpenState } from "../../../../commons/store/store";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { useState } from "react";
import { Menu } from "../../menus/Menu.container";

export const SideBar = () => {
  const [isMode, setIsMode] = useRecoilState(isModeState);
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  const [menuState, setMenuState] = useState(false);

  const onClickChangeMode = () => {
    setIsMode((prov: boolean) => !prov);
  };
  const onClickChangeOpen = () => {
    setIsOpen((prov: boolean) => !prov);
  };

  const menu_list = [
    {
      icon: <FaReact />,
      menu: "react",
      url: "/",
      open: true,
      subMenu: [
        {
          menu: "서브메뉴1",
          url: "/",
        },
        {
          menu: "서브메뉴2",
          url: "/",
        },
      ],
    },
    {
      icon: <RiJavascriptFill />,
      menu: "Javascript",
      url: "/",
      open: false,
      subMenu: [],
    },
  ];

  return (
    <S.Wrapper isOpen={isOpen}>
      {/*  로고  */}
      <S.Logo></S.Logo>
      {/*  메뉴  */}
      <S.MenuWrap>
        {menu_list.map((menu) => (
          <Menu menu={menu} />
        ))}
      </S.MenuWrap>
      {/*  하단  */}
      <S.BottomGroup isOpen={isOpen}>
        <S.Mode
          isOpen={isOpen}
          className="cursor_point"
          onClick={onClickChangeMode}
        >
          <S.ModePoint isMode={isMode}></S.ModePoint>
          {isMode ? (
            <S.ModeIcon className="r_icon">
              <MdDarkMode />
            </S.ModeIcon>
          ) : (
            <S.ModeIcon className="d_icon">
              <MdLightMode />
            </S.ModeIcon>
          )}
        </S.Mode>
        <S.OpenBtn
          onClick={onClickChangeOpen}
          isOpen={isOpen}
          className="cursor_point"
        >
          <LuArrowLeftToLine />
        </S.OpenBtn>
      </S.BottomGroup>
    </S.Wrapper>
  );
};
