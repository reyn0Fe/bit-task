import { UserTokensOperationsDrawer } from "@widgets";
import { DrawersState } from "./slice.types";

export const drawersConfig = {
  userTokensOperations: UserTokensOperationsDrawer,
};

export const drawersInitialState: DrawersState = {
  activeKey: "",
  activeDrawerProps: {},
};
