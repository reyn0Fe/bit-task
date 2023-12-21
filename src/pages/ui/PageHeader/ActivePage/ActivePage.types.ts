import { ReactNode } from "react";

export type PageSettings = {
  label: string;
  Icon: ReactNode;
};

export type ActivePageConfig = {
  [key: string]: PageSettings;
};
