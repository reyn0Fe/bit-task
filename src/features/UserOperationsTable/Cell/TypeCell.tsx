import { FC } from "react";
import { UserOperationType } from "@shared";

export const TypeCell: FC<{ type: UserOperationType }> = ({ type }) => {
  return <div>{type === "DECREASE" ? "Списание" : "Пополнение"}</div>;
};
