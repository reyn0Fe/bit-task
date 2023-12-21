import { ReactNode } from "react";

export type WidgetTitleLevel = "h2" | "h3";

export type WidgetTitleProps = {
  children: ReactNode;
  level?: WidgetTitleLevel;
};
