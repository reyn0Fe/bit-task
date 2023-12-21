import { FC, useEffect, useState } from "react";
import { PaginationProps } from "./Pagination.types";
import { getPaginationButtons } from "./Pagination.utils";
import * as S from "./Pagination.styled";
import { PaginationButton } from "@shared/ui/Pagination/PaginationButton";
import { ArrowButton } from "@shared/ui/Pagination/ArrowButton/ArrowButton";
import { useDebounce } from "@shared";

export const Pagination: FC<PaginationProps> = ({
  perPage,
  onChange,
  count,
}) => {
  const [activePage, setActivePage] = useState(1);
  const debouncedActivePage = useDebounce(activePage, 250);
  const pagesCount = Math.ceil(count / perPage);
  const buttons = getPaginationButtons(activePage, pagesCount);

  useEffect(() => {
    onChange(debouncedActivePage);
  }, [debouncedActivePage, onChange]);

  return (
    <S.StyledPagination>
      <ArrowButton
        direction={"back"}
        activePage={activePage}
        setActivePage={setActivePage}
        count={count}
      />

      {buttons.map((btn, idx) => (
        <PaginationButton
          key={`${btn}-${idx}`}
          activePage={activePage}
          setActive={setActivePage}
          label={btn}
        />
      ))}

      <ArrowButton
        direction={"forward"}
        activePage={activePage}
        setActivePage={setActivePage}
        count={pagesCount}
      />
    </S.StyledPagination>
  );
};
