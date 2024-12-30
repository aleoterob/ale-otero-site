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

const ProgrammingSkillsChart = () => {
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
        backgroundColor: ["rgba(71, 204, 165, 1)"],
        borderColor: ["rgba(71, 204, 165, 1)"],
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
        Programming
      </h2>
      <div className="relative h-[500px]  text-white">
        <Bar data={data} options={options} className=" text-white" />
      </div>
    </div>
  );
};

export default ProgrammingSkillsChart;
