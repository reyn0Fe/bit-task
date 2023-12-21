import { OrganizationState } from "./slice.types";

export const initialState: OrganizationState = {
  id: -1,
  users: [],
  usersCount: 0,
  sort: {
    skip: 0,
    take: 10,
    orderBy: "",
    direction: "desc",
  },
  query: "",
};
