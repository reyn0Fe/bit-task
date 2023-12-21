import { drawersConfig } from "@app/store";
import { useAppSelector } from "@shared";

export const DrawersRenderer = () => {
  const drawer = useAppSelector((s) => s.drawersList);
  if (!drawer.activeKey) return null;

  const Component = drawersConfig[drawer.activeKey];

  return <Component {...drawer.activeDrawerProps!} />;
};
