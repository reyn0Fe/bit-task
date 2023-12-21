import { FC, useEffect, useState } from "react";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { getUserOperations, Table, UserOperation, WidgetTitle } from "@shared";
import { UserOperationsTableProps } from "./UserOperationsTable.types";
import { userOperationsTableColumns } from "./UserOperationsTable.columns";
import * as S from "./UserOperationsTable.styled";

export const UserOperationsTable: FC<UserOperationsTableProps> = ({
  userId,
}) => {
  const [operations, setOperations] = useState<UserOperation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const table = useReactTable({
    data: operations,
    columns: userOperationsTableColumns,
    enableSorting: false,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    setIsLoading(true);
    getUserOperations(userId)
      .then((data) => setOperations(data))
      .finally(() => setIsLoading(false));
  }, [userId]);

  return (
    <S.StyledUserOperationsTable>
      <WidgetTitle level="h3">
        {isLoading ? "Загрузка..." : "История операций"}
      </WidgetTitle>

      <Table table={table} />
    </S.StyledUserOperationsTable>
  );
};
