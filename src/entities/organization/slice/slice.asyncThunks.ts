import { createAsyncThunk } from "@reduxjs/toolkit";
import { db, RootState, User } from "@shared";

export const fetchOrgUsers = createAsyncThunk(
  "organization/users",
  async (_: void, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const { query, sort } = state.organization;
    const { direction, orderBy, skip, take } = sort;

    let limitedUsers = db.users.where("organizationId").equals(1);

    if (direction === "desc") limitedUsers = limitedUsers.reverse();
    if (query)
      limitedUsers = limitedUsers.filter((u) => u.name.indexOf(query) >= 0);

    const users: User[] = [];
    let allSorted: User[];

    if (orderBy) {
      allSorted = await limitedUsers.sortBy(orderBy);
    } else allSorted = await limitedUsers.toArray();

    const usersCount = allSorted.length;
    allSorted = allSorted.slice(skip);

    let idx = 0;
    while (users.length < take && allSorted[idx]) {
      users.push(allSorted[idx]);
      idx++;
    }

    if (users.length === 0) throw new Error("No Users On Fetch Org Users");
    return {
      users,
      usersCount,
    };
  },
);
