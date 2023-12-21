import { drawersConfig } from "./slice.config";
import { PayloadAction } from "@reduxjs/toolkit";

export type DrawerKeys = keyof typeof drawersConfig;
export type DrawersKeysIncludeNull = DrawerKeys | "";

export type DrawersState = {
  activeKey: DrawersKeysIncludeNull;
  activeDrawerProps: unknown;
};

export type ShowDrawerAction<T> = PayloadAction<{
  key: DrawerKeys;
  props: T;
}>;
