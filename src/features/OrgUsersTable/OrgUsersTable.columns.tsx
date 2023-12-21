import { createColumnHelper } from "@tanstack/react-table";
import { User } from "@shared";
import { Controls } from "./Cells";

const columnsHelper = createColumnHelper<User>();

export const orgUsersTableColumns = [
  columnsHelper.accessor("email", {
    id: "email",
    header: "Email",
    enableSorting: false,
  }),
  columnsHelper.accessor("name", {
    id: "name",
    header: "Имя",
    enableSorting: false,
  }),
  columnsHelper.accessor("role", {
    id: "role",
    header: "Роль",
    enableSorting: false,
  }),
  columnsHelper.accessor("subscription", {
    id: "subscription",
    header: "Подписка",
    enableSorting: false,
  }),
  columnsHelper.accessor("tokens", {
    id: "tokens",
    header: "Токены",
    enableSorting: true,
    cell: (props) => `${props.getValue()} TKN`,
  }),
  columnsHelper.display({
    id: "controls",
    header: "Действия",
    enableSorting: false,
    cell: (props) => <Controls userId={props.row.original.id} />,
  }),
];
