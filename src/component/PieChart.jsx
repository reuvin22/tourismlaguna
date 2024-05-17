import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function PieChart({ data, title }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!data) return;

    const ctx = canvasRef.current.getContext("2d");

    const chartInstance = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        plugins: {
          legend: {
            display: true,
            position: "right",
          },
          title: {
            display: true,
            text: title,
          },
        },
        responsive: true,
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [data]);

  return (
    <div className="grid place-items-center rounded-lg py-5 gap-2 bg-[#F9EFEF] w-full h-52 relative sm:h-80">
      <canvas ref={canvasRef} id="pie"></canvas>
    </div>
  );
}

export default PieChart;
