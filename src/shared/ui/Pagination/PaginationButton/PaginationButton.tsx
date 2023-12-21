import { FC } from "react";
import { PaginationButtonProps } from "./PaginationButton.types";
import * as S from "./PaginationButton.styled";

export const PaginationButton: FC<PaginationButtonProps> = ({
  setActive,
  activePage,
  label,
}) => {
  const numberId = Number(label);
  const setPage = () => {
    if (label !== "") {
      setActive(numberId);
    }
  };

  return (
    <S.StyledPaginationButton
      onClick={setPage}
      className={numberId === activePage ? "active" : ""}
    >
      {label !== "" ? label : "...."}
    </S.StyledPaginationButton>
  );
};
