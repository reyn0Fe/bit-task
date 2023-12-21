import { TableProps } from "./Table.types";
import * as S from "./Table.styled";
import { flexRender } from "@tanstack/react-table";
import { Pagination, WidgetTitle } from "@shared";
import { Th } from "./Th";

export function Table<T>({
  table,
  onSortChange,
  onPageChange,
  perPage,
  totalCount,
}: TableProps<T>) {
  if (table.getPageCount() <= 0)
    return <WidgetTitle level="h3">Ничего не найдено</WidgetTitle>;

  return (
    <S.Wrapper>
      <S.StyledTable>
        <S.THead>
          {table.getHeaderGroups().map((headerGroup) => (
            <S.HeadTr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th<T> onSortChange={onSortChange!} {...header} key={header.id}>
                  {header.column.columnDef.header as string}
                </Th>
              ))}
            </S.HeadTr>
          ))}
        </S.THead>
        <S.TBody>
          {table.getRowModel().rows.map((row) => {
            return (
              <S.BodyTr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <S.Td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </S.Td>
                  );
                })}
              </S.BodyTr>
            );
          })}
        </S.TBody>
      </S.StyledTable>

      {totalCount && perPage && onPageChange ? (
        <Pagination
          count={totalCount}
          perPage={perPage}
          onChange={onPageChange}
        />
      ) : null}
    </S.Wrapper>
  );
}
