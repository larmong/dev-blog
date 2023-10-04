import { Wrapper, MenuArrow, SebMenuWrap, SubMenu } from "./Menu.style";
import { useState } from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import { useRecoilState } from "recoil";
import { isOpenState } from "../../../commons/store/store";
import { useRouter } from "next/router";

export const Menu = (props) => {
  const router = useRouter();
  const [menuState, setMenuState] = useState(true);
  const [isOpen] = useRecoilState(isOpenState);

  const onClickChangeMode = () => {
    setMenuState((prov: boolean) => !prov);
  };

  const onClickMoveToPage = () => {
    router.push(`/${props.menu.url}`);
  };

  return (
    <Wrapper onClick={onClickMoveToPage} isOpen={isOpen}>
      <span className="cursor_point" onClick={onClickChangeMode}>
        {props.menu.icon}
        <em>{props.menu.menu}</em>
        {props.menu.subMenu.length === 0 ? (
          ""
        ) : (
          <MenuArrow isActive={menuState} isOpen={isOpen} />
        )}
      </span>
      {props.menu.subMenu.length === 0 ? (
        <></>
      ) : (
        menuState && (
          <SebMenuWrap isActive={menuState} isOpen={isOpen}>
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
