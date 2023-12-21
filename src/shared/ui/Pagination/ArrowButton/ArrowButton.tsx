import ArrowLeft from "@shared/icons/arrowLeft.svg";
import ArrowRight from "@shared/icons/arrowRight.svg";
import { ArrowButtonProps } from "./ArrowButton.types";
import * as S from "./ArrowButton.styled";
import { FC } from "react";

export const ArrowButton: FC<ArrowButtonProps> = ({
  direction,
  setActivePage,
  activePage,
  count,
}) => {
  const ArrowComponent = direction === "back" ? ArrowLeft : ArrowRight;

  const setPage = () => {
    const multiplier = direction === "back" ? -1 : 1;
    setActivePage(activePage + multiplier);
  };

  const isDisabled =
    direction === "back" ? activePage === 1 : activePage === count - 1;

  return (
    <S.StyledArrowButton disabled={isDisabled} onClick={setPage}>
      <ArrowComponent />
    </S.StyledArrowButton>
  );
};
