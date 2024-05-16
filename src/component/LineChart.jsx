import React, { useEffect, useMemo, useRef } from 'react';
import Chart from 'chart.js/auto';

function LineChart({ data, title }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');

        const chartInstance = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                plugins: {
                    legend: {
                        display: true,
                        position: 'right',
                    },
                    title: {
                        display: true,
                        text: title
                    }
                },
                responsive: true
            }
        });

        return () => {
            chartInstance.destroy();
        };
    }, [data]);

    return (
        <div className='grid place-items-center rounded-lg gap-2 bg-[#F9EFEF] w-full h-62 relative'>
            <canvas ref={canvasRef} id='pie'></canvas>
        </div>
    );
}

export default LineChart;
