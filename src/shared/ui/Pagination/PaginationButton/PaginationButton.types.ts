import { Dispatch } from "react";

export type PaginationButtonProps = {
  activePage: number;
  setActive: Dispatch<number>;
  label: string;
};
