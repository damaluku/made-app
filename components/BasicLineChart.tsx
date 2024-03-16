import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [5, 5, 5, 5, 1, 5],
          label: "Attendance",
        },
      ]}
      height={300}
    />
  );
}
