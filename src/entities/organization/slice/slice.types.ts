import { SortDirection, User } from "@shared";

export type OrganizationState = {
  id: number;
  users: User[];
  usersCount: number;
  sort: SortParams;
  query: string;
};

export type OrganizationUsersOrderBy = "tokens" | "";

export type SortParams = {
  skip: number;
  take: number;
  orderBy: OrganizationUsersOrderBy;
  direction: SortDirection;
};
