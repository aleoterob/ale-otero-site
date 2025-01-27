"use client";

import React, { useEffect, useRef, useState } from "react";
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

const CmsSkillsChart = () => {
  // Estado para manejar si el gráfico es visible
  const [isVisible, setIsVisible] = useState(false);

  // Ref para el contenedor del gráfico
  const chartRef = useRef(null);

  // Datos para el gráfico
  const data = {
    labels: [
      "Wordpress",
      "Shopify",
      "Web Flow",
      "PrestaShop",
      "Wix",
      "Drupal",
      "Joomla",
      "Magento",
    ],
    datasets: [
      {
        data: [100, 90, 90, 70, 72, 64, 60, 50],
        backgroundColor: ["rgba(146, 135, 205, 1)"],
        borderColor: ["rgba(146, 135, 205, 1)"],
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
    animation: {
      duration: 1000, // Duración de la animación
      easing: "easeInOutCubic" as const,
      // Solo se activa la animación si isVisible es verdadero
      onComplete: () => {
        if (isVisible) {
          console.log("Animation completed!");
        }
      },
    },
  };

  // Detectar si el componente es visible en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // El gráfico es visible cuando el 50% de él está en pantalla
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  return (
    <div className="p-6 bg-background rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold text-white text-center mb-4">CMS</h2>
      <div
        className="relative h-[500px] text-white"
        ref={chartRef} // Asigna el ref al contenedor del gráfico
      >
        {/* Solo renderizar el gráfico si es visible */}
        {isVisible && (
          <Bar data={data} options={options} className=" text-white" />
        )}
      </div>
    </div>
  );
};

export default CmsSkillsChart;
