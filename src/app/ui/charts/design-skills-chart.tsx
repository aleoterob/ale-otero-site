"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

// Registrar componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const DesignSkillsChart = () => {
  // Datos para el gráfico
  const data = {
    labels: [
      "HTML5, CSS3",
      "JavaScript",
      "TypeScript",
      "React, Next.js",
      "Vue, Angular",
      "TailWind, SASS",
      "REST, SOAP",
      "PHP",
      "SQL",
    ],
    datasets: [
      {
        data: [95, 90, 85, 92, 80, 88, 85, 70, 75],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(99, 255, 132, 0.6)",
          "rgba(132, 99, 255, 0.6)",
          "rgba(255, 64, 159, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(99, 255, 132, 1)",
          "rgba(132, 99, 255, 1)",
          "rgba(255, 64, 159, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Configuración del gráfico
  const options = {
    indexAxis: "y" as const, // Hace que el gráfico sea horizontal
    scales: {
      x: {
        beginAtZero: true,
        ticks: { color: "#ffffff" }, // Texto del eje X
      },
      y: {
        ticks: { color: "#ffffff" }, // Texto del eje Y
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#ffffff", // Color del texto de la leyenda
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-6 bg-background rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold text-white text-center mb-4">
        Design and Other Tools
      </h2>
      <div className="relative h-[500px]  text-white">
        <Bar data={data} options={options} className=" text-white" />
      </div>
    </div>
  );
};

export default DesignSkillsChart;
