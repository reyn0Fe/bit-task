import { createColumnHelper } from "@tanstack/react-table";
import { UserOperation } from "@shared";
import { TypeCell, DateCell, ValueCell } from "./Cell";

const columnsHelper = createColumnHelper<UserOperation>();

export const userOperationsTableColumns = [
  columnsHelper.accessor("type", {
    header: "Тип",
    cell: (props) => <TypeCell type={props.row.original.type} />,
  }),
  columnsHelper.accessor("value", {
    header: "Сумма",
    cell: (props) => <ValueCell {...props.row.original} />,
  }),
  columnsHelper.accessor("createdAt", {
    header: "Дата",
    cell: (props) => <DateCell createdAt={props.row.original.createdAt} />,
  }),
];
