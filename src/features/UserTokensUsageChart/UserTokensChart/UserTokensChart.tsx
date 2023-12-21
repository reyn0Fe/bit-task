import EChartsReact from "echarts-for-react";
import { getUserTokensChartOptions } from "./UserTokensChart.options";

export const UserTokensChart = () => {
  return (
    <EChartsReact notMerge lazyUpdate option={getUserTokensChartOptions()} />
  );
};
