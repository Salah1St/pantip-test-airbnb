"use client";
import { ChartdataSrcs } from "@/model/interface";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, ChartOptions, Plugin, DatasetChartOptions, ElementChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";

interface props {
  rawData: ChartdataSrcs[];
}
export default function ChartDoughnut({ rawData }: props) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const dataSrc = rawData.map((i) => i.data);
  const backgroundColor = rawData.map((i) => i.color);

  const config: ChartData<"doughnut", number[], unknown> = {
    datasets: [
      {
        data: dataSrc,
        backgroundColor,
        hoverOffset: 4,
        // offset: -12,
        rotation: 30,
        borderWidth: 4,
        // borderRadius: { innerStart: 100, outerStart: 100 },
        borderJoinStyle: "round",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%",
    animation: { animateRotate: true },
  };

  const textCenter: Plugin<"doughnut"> = {
    id: "textCenter",

    beforeDatasetsDraw(chart) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "bolder 15px sans-serif";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        `${chart.data.datasets[0].data.reduce((p, c) => p + c, 0).toFixed(0)}M Tons` || "",
        chart.getDatasetMeta(0).data[0]?.x ?? 0,
        chart.getDatasetMeta(0).data[0]?.y ?? 0,
      );
    },
  };

  return (
    <div className="w-10 h-full flex justify-center items-center flex-grow ">
      <Doughnut data={config} options={options} plugins={[textCenter]} />
    </div>
  );
}
