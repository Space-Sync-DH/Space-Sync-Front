// src/components/GraficoReservas.tsx
import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface GraficoReservasProps {
    id: string;
    label: string;
    data: number[];
    labels: string[];
}

const GraficoReservas: React.FC<GraficoReservasProps> = ({ id, label, data, labels }) => {
    useEffect(() => {
        const ctx = document.getElementById(id) as HTMLCanvasElement;
        new Chart(ctx, {
            type: 'bar', // Cambia el tipo de gráfico según sea necesario
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: data,
                    backgroundColor: 'rgba(0, 74, 173, 0.5)',
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top' as const,
                    },
                },
            },
        });
    }, [id, label, data, labels]);

    return <canvas id={id} width="400" height="400"></canvas>;
};

export default GraficoReservas;
