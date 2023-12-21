import { Header } from "@tanstack/react-table";
import { ReactNode } from "react";
import { SortDirection } from "../Table.types";

export type ThProps<T = unknown> = Header<T, unknown> & {
  children: ReactNode;
  onSortChange: (sortBy: string, direction: SortDirection) => unknown;
};
