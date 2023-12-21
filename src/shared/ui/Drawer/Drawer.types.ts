import { PropsWithChildren } from "react";

export type DrawerProps = PropsWithChildren & {
  name: string;
  isOpen: boolean;
};

export type DrawerItemProps<T> = unknown | T;
