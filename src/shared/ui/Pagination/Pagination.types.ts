export type PaginationProps = {
  count: number;
  perPage: number;
  onChange: OnPageChange;
};

export type OnPageChange = (newPage: number) => unknown;
