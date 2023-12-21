import { useCallback } from "react";
import { UserOperationsTable, UserTokensUsageChart } from "@features";
import {
  Drawer,
  getUserById,
  useAppSelector,
  User,
  useSimplePromise,
} from "@shared";
import { UserTokensOperationsDrawerProps } from "./UserTokensOperationsDrawer.types";
import * as S from "./UserTokensOperationsDrawer.styled";

export const UserTokensOperationsDrawer = () => {
  const drawer = useAppSelector((s) => s.drawersList);
  const drawerProps =
    drawer.activeDrawerProps as UserTokensOperationsDrawerProps;

  const fetchUsers = useCallback(
    () => getUserById(drawerProps.userId ?? -1),
    [drawerProps.userId],
  );

  const { data } = useSimplePromise<User | undefined>(fetchUsers);
  if (!data && drawer.activeKey === "userTokensOperations") return null;

  return (
    <Drawer
      name={data!.email}
      isOpen={drawer.activeKey === "userTokensOperations"}
    >
      <UserTokensUsageChart userId={data!.id} />
      <S.Divider />
      <UserOperationsTable userId={data!.id} />
    </Drawer>
  );
};
