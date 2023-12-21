import { Dispatch } from "react";

export type ArrowButtonProps = {
  direction: "back" | "forward";
  activePage: number;
  setActivePage: Dispatch<number>;
  count: number;
};
