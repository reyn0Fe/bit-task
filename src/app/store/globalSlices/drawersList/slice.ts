import { createSlice } from "@reduxjs/toolkit";
import { drawersInitialState } from "./slice.config";
import {
  DrawerKeys,
  DrawersState,
  ShowDrawerAction,
} from "@app/store/globalSlices";

const drawersListSlice = createSlice({
  name: "drawers",
  reducers: {
    hideDrawer(state) {
      state.activeKey = "";
      state.activeDrawerProps = {};
    },

    showDrawer<T>(state: DrawersState, action: ShowDrawerAction<T>) {
      state.activeKey = action.payload.key;
      state.activeDrawerProps = action.payload.props;
    },
  },
  initialState: drawersInitialState,
});

export const drawersListReducer = drawersListSlice.reducer;
export const { hideDrawer } = drawersListSlice.actions;
export const showDrawer = <T = never, AT extends T = T>(
  key: DrawerKeys,
  props: AT,
) =>
  drawersListSlice.actions.showDrawer({
    key,
    props,
  });
