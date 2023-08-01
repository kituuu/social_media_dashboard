"use client";

import "@/app/styles/components/analyticschart.css";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import type { ChartData, ChartOptions, ScriptableContext } from "chart.js";
interface LineProps {
  options: ChartOptions<"line">;
  data: ChartData<"line">;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AnalyticsChart = (params:any) => {
  const [chartData, setChartData]: [ChartData<"line">, Function] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});
  const labels = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];

  let data:any = []
  for (let i = 0; i < params.insights.length; i++) {
    data.push(params.insights[i].reach)
  }
  const [delayed, setDelayed] = useState(false);
  useEffect(() => {
    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Reach",
          // this data is actual data for the points
          data: data,
          borderColor: "rgba(0,210,255,0.3)",
          backgroundColor: (context: ScriptableContext<"line">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, "rgba(58,123,213,1)");
            gradient.addColorStop(1, "rgba(0,210,255,0.3)");
            return gradient;
          },
          pointBackgroundColor: "rgba(58,123,213,1)",
          fill: true,
          tension: 0.4,
          radius: 5,
          hitRadius: 20,
          hoverRadius: 7,
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
          labels: {
            font:{
              // size:20,
              weight: 500,
            }
          }
        },
        title: {
          display: true,
          text: "User Insights",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      animation: {
        onComplete: () => {
          setDelayed((delayed) => true);
        },
        delay: (context: {
          type: string;
          mode: string;
          dataIndex: number;
          datasetIndex: number;
        }) => {
          let delay = 0;
          if (
            context.type === "data" &&
            context.mode === "default" &&
            !delayed
          ) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }
          return delay;
        },
      },
      scales: {
        y: {
          ticks: {
            callback: function (value: Number) {
              return value;
            },
          },
        },
      },
      // tension: 0.4,
    });
  }, []);

  return (
    <div id="chart" className="analytic_chart">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default AnalyticsChart;
