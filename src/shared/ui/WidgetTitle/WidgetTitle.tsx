import * as S from "./WidgetTitle.styled";
import { FC } from "react";
import { WidgetTitleProps } from "./WidgetTitle.types";

export const WidgetTitle: FC<WidgetTitleProps> = ({ level, children }) => {
  const TitleComponent = S.getWidgetTitle(level ?? "h2");

  return <TitleComponent>{children}</TitleComponent>;
};
