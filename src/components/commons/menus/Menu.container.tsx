import { Wrapper, MenuArrow, SebMenuWrap, SubMenu } from "./Menu.style";
import { useState } from "react";
import { MdOutlineArrowRight } from "react-icons/md";

export const Menu = (props) => {
  const [menuState, setMenuState] = useState(true);

  const onClickChangeMode = () => {
    setMenuState((prov: boolean) => !prov);
  };

  const onClickMoveToPage = () => {
    window.open(`/${props.menu.url}`, "_self");
  };

  return (
    <Wrapper onClick={onClickMoveToPage}>
      <span className="cursor_point" onClick={onClickChangeMode}>
        {props.menu.icon}
        {props.menu.menu}
        {props.menu.subMenu.length === 0 ? (
          ""
        ) : (
          <MenuArrow isActive={menuState} />
        )}
      </span>
      {props.menu.subMenu.length === 0 ? (
        <></>
      ) : (
        menuState && (
          <SebMenuWrap isActive={menuState}>
            {props.menu.subMenu.map((submenu) => (
              <SubMenu>
                <span className="cursor_point">
                  <MdOutlineArrowRight />
                  {submenu.menu}
                </span>
              </SubMenu>
            ))}
          </SebMenuWrap>
        )
      )}
    </Wrapper>
  );
};
