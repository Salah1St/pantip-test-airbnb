"use client";

import { primaryColor } from "@/model/constants";
import { LineChartdataSrcs } from "@/model/interface";

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Point, ChartData } from "chart.js";
import { useMemo } from "react";
import { Line } from "react-chartjs-2";

interface Props {
  rawData: LineChartdataSrcs[];
}
interface lineDateset {
  data: number[];
  borderColor: string;
}
export default function ChartLine({ rawData }: Props) {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const labels = rawData.map((i) => i.label);
  const rawDatasets: lineDateset[] = new Array(rawData[0].data.length)
    .fill(0)
    .map(() => ({ data: [], borderColor: primaryColor[+Math.floor(Math.random() * primaryColor.length).toFixed(0)] }));

  rawData.forEach((i, d) => {
    i.data.forEach((j, dx) => {
      rawDatasets[dx].data.push(j);
    });
  });

  const datasets = useMemo(() => rawDatasets, [rawDatasets]);
  const data: ChartData<"line", (number | Point | null)[], unknown> = {
    labels,
    datasets,
  };
  const options = {
    responsive: true,
    scales: { x: { grid: { display: false } }, y: { beginAtZero: false, ticks: { callback: (v: string | number) => +v / 1e6 + "M" } } },
    plugins: {
      legend: { display: false },
      title: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full h-10 flex justify-center items-center flex-grow">
      <Line options={options} data={data} />
    </div>
  );
}

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top" as const,
//     },
//     title: {
//       display: true,
//       text: "Chart.js Line Chart",
//     },
//   },
// };

// export function App() {
//   return <Line options={options} data={data} />;
// }
