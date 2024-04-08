"use client";

import { primaryColor } from "@/model/constants";
import { ChartdataSrcs } from "@/model/interface";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData } from "chart.js";
import { Bar } from "react-chartjs-2";

interface Props {
  rawData: ChartdataSrcs[];
}

export default function ChartHorizontalBar({ rawData }: Props) {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  const labels = rawData.map((i) => i.label);
  const dataSrc = rawData.map((i) => i.data);
  const chunk = Math.max(...dataSrc) / primaryColor.length;
  const arr = new Array(primaryColor.length).fill(chunk).map((i, d) => i * (d + 1));

  const colorIndex = [];
  for (const id in dataSrc) {
    for (const key in arr) {
      if (arr[key] < dataSrc[id]) {
        if (+key === arr.length - 1) {
          colorIndex.push(primaryColor[key]);
        }
      } else {
        colorIndex.push(primaryColor[key]);
        break;
      }
    }
  }

  const data: ChartData<"bar", (number | [number, number] | null)[], unknown> = {
    labels,
    datasets: [
      {
        label: "Carbon emission",
        data: dataSrc,
        backgroundColor: colorIndex,
      },
    ],
  };
  const options = {
    indexAxis: "y" as const,
    responsive: true,

    scales: {
      y: { grid: { display: false }, border: { display: false } },
      x: { grid: { display: false }, ticks: { display: false }, border: { display: false } },
    },
    elements: {
      bar: {
        borderWidth: 1,
        borderColor: "#e7e7e7",
        borderRadius: 100,
      },
    },
    plugins: {
      legend: { display: false },
      title: {
        display: false,
      },
    },
  };

  return <Bar className="w-1/2 aspect-square" options={options} data={data} />;
}