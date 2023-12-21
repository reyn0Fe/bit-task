import { FC } from "react";
import { hideDrawer } from "@app/store/globalSlices";
import CloseIcon from "@shared/icons/close.svg";
import {
  useAppDispatch,
  useAppSelector,
  useDisableScroll,
  useOutsideClick,
} from "@shared";
import { DrawerProps } from "./Drawer.types";
import * as S from "./Drawer.styled";

export const Drawer: FC<DrawerProps> = ({ name, isOpen, children }) => {
  const activeKey = useAppSelector((s) => s.drawersList.activeKey);
  const dispatch = useAppDispatch();
  const closeDrawer = () => dispatch(hideDrawer());
  const drawerRef = useOutsideClick(closeDrawer);
  useDisableScroll(isOpen || !activeKey);

  if (!isOpen || !activeKey) return null;

  return (
    <S.Wrapper>
      <S.StyledDrawer ref={drawerRef}>
        <S.DrawerHeader>
          {name}

          <S.DrawerClose onClick={closeDrawer}>
            <CloseIcon />
          </S.DrawerClose>
        </S.DrawerHeader>

        <S.DrawerContent>{children}</S.DrawerContent>
      </S.StyledDrawer>
    </S.Wrapper>
  );
};
