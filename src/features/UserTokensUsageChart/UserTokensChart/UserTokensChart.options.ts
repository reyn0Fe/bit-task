import { graphic } from "echarts";

export const getUserTokensChartOptions = () => {
  let base = +new Date(1988, 9, 3);
  const oneDay = 24 * 3600 * 1000;

  const d = [[base, Math.random() * 3000]];

  for (let i = 1; i < 20000; i++) {
    const now = new Date((base += oneDay));
    d.push([+now, Math.round((Math.random() - 0.5) * 2000 + d[i - 1][1])]);
  }

  return {
    xAxis: {
      type: "time",
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
      position: "right",
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 20,
      },
      {
        start: 0,
        end: 20,
      },
    ],
    grid: {
      width: "auto",
      left: 0,
      right: "13%",
      top: "5%",
    },
    series: [
      {
        type: "line",
        smooth: true,
        symbol: "none",
        data: d,
        lineStyle: { color: "#1C64F2" },
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#1C64F2",
            },
            {
              offset: 1,
              color: "rgba(28, 100, 242, 0.20)",
            },
          ]),
          opacity: 0.3,
        },
      },
    ],
  };
};
