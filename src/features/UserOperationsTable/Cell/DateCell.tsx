import { FC } from "react";
import { prettifyNumber } from "@shared";

export const DateCell: FC<{ createdAt: Date }> = ({ createdAt }) => {
  return (
    <div>
      {prettifyNumber(createdAt.getDate())}.
      {prettifyNumber(createdAt.getMonth())}.{createdAt.getFullYear()}, <br />
      {prettifyNumber(createdAt.getHours())}:
      {prettifyNumber(createdAt.getMinutes())}:
      {prettifyNumber(createdAt.getSeconds())}
    </div>
  );
};
