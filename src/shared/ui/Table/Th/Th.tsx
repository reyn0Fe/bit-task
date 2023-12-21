import ArrowDownIcon from "@shared/icons/arrowDown.svg";
import { ThProps } from "./Th.types";
import * as S from "./Th.styled";
import { SortDirection } from "@shared";

export function Th<T>({ children, onSortChange, ...props }: ThProps<T>) {
  const canSort = props.column.getCanSort();
  const sortType = props.column.getIsSorted();

  const setSort = () => {
    if (!canSort) return;

    let direction: SortDirection = false;
    if (!sortType) direction = "desc";
    if (sortType === "desc") direction = "asc";

    const orderBy = direction ? props.id : "";
    onSortChange(orderBy, direction);
    props.column.toggleSorting();
  };

  return (
    <S.Th onClick={setSort} className={canSort ? "sortable" : ""}>
      <S.IconContainer className={sortType === "asc" ? "asc" : ""}>
        {children}
        {sortType && <ArrowDownIcon />}
      </S.IconContainer>
    </S.Th>
  );
}
