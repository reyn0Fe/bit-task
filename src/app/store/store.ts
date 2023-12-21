import { configureStore } from "@reduxjs/toolkit";
import { organizationReducer } from "@entities";
import { drawersListReducer } from "./globalSlices";

export const store = configureStore({
  reducer: {
    organization: organizationReducer,
    drawersList: drawersListReducer,
  },
});
