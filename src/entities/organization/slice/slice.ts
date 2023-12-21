import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortDirection, User } from "@shared";
import { initialState } from "./slice.constant";
import { fetchOrgUsers } from "./slice.asyncThunks";
import { OrganizationUsersOrderBy } from "./slice.types";

const organizationSlice = createSlice({
  name: "organization",
  reducers: {
    updateSortDirection: (state, action: PayloadAction<SortDirection>) => {
      state.sort.direction = action.payload;
      state.sort.skip = 0;
    },

    updateOrderBy: (state, action: PayloadAction<OrganizationUsersOrderBy>) => {
      state.sort.orderBy = action.payload;
      state.sort.skip = 0;
    },

    updateSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      state.sort.skip = 0;
    },

    updatePage: (state, action: PayloadAction<number>) => {
      state.sort.skip = (action.payload - 1) * state.sort.take;
    },
  },
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(
      fetchOrgUsers.fulfilled,
      (state, action: PayloadAction<{ users: User[]; usersCount: number }>) => {
        const { usersCount, users } = action.payload;
        state.users = users;
        state.usersCount = usersCount;
      },
    );

    builder.addCase(fetchOrgUsers.rejected, (state) => {
      state.users = [];
    });
  },
});

export const organizationReducer = organizationSlice.reducer;
export const {
  updateSortDirection,
  updateSearchQuery,
  updateOrderBy,
  updatePage,
} = organizationSlice.actions;
