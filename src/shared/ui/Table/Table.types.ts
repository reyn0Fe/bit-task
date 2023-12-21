import { Table } from "@tanstack/react-table";
import { OnPageChange } from "@shared";

export type TableProps<T> = {
  table: Table<T>;
  totalCount?: number;
  perPage?: number;
  onSortChange?: OnSortChange;
  onPageChange?: OnPageChange;
};

export type OnSortChange<T = string> = (
  sortBy: T,
  direction: SortDirection,
) => unknown;

export type SortDirection = "asc" | "desc" | false;
