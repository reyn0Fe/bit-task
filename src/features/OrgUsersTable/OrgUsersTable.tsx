import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  fetchOrgUsers,
  OrganizationUsersOrderBy,
  updateOrderBy,
  updatePage,
  updateSortDirection,
} from "@entities";
import {
  useAppDispatch,
  useAppSelector,
  User,
  Table,
  OnSortChange,
  OnPageChange,
} from "@shared";
import { orgUsersTableColumns } from "./OrgUsersTable.columns";
import { useCallback } from "react";

export const OrgUsersTable = () => {
  const { users, usersCount, sort } = useAppSelector((s) => s.organization);
  const dispatch = useAppDispatch();

  const table = useReactTable({
    data: users,
    columns: orgUsersTableColumns,
    manualSorting: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const onSortChange: OnSortChange = useCallback(
    (sortBy, direction) => {
      dispatch(updateOrderBy(sortBy as OrganizationUsersOrderBy));
      dispatch(updateSortDirection(direction));
      dispatch(fetchOrgUsers());
    },
    [dispatch],
  );

  const onPageChange: OnPageChange = useCallback(
    (newPage) => {
      dispatch(updatePage(newPage));
      dispatch(fetchOrgUsers());
    },
    [dispatch],
  );

  return (
    <Table<User>
      perPage={sort.take}
      totalCount={usersCount}
      onPageChange={onPageChange}
      onSortChange={onSortChange}
      table={table}
    />
  );
};
