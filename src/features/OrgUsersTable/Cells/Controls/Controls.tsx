import { FC } from "react";
import { showDrawer } from "@app/store/globalSlices";
import EditIcon from "@shared/icons/edit.svg";
import TrashIcon from "@shared/icons/trash.svg";
import { useAppDispatch } from "@shared";
import { ControlsProps } from "./Controls.types";
import * as S from "./Controls.styled";
import { UserTokensOperationsDrawerProps } from "@widgets/UserTokensOperationsDrawer/UserTokensOperationsDrawer.types";

export const Controls: FC<ControlsProps> = ({ userId }) => {
  const dispatch = useAppDispatch();

  const openUserDrawer = () => {
    dispatch(
      showDrawer<UserTokensOperationsDrawerProps>("userTokensOperations", {
        userId,
      }),
    );
  };

  return (
    <S.StyledControls>
      <span onClick={openUserDrawer}>
        <EditIcon />
      </span>
      <TrashIcon />
    </S.StyledControls>
  );
};
