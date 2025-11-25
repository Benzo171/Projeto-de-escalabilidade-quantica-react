import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DynamicComplexityChart({
  allLabels,
  allClassicalData,
  allQuantumData,
  currentIndex,
  classicalLabel,
  quantumLabel,
  xAxisLabel,
  yAxisLabel,
  useLogScale = false,
  title,
}) {
  // Filtra dados até o índice atual
  const labels = allLabels.slice(0, currentIndex + 1);
  const classicalData = allClassicalData.slice(0, currentIndex + 1);
  const quantumData = allQuantumData.slice(0, currentIndex + 1);

  const data = {
    labels,
    datasets: [
      {
        label: classicalLabel,
        data: classicalData,
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: '#ef4444',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 7,
      },
      {
        label: quantumLabel,
        data: quantumData,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      duration: 300,
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: { size: 12, weight: 'bold' },
          padding: 15,
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: title,
        font: { size: 16, weight: 'bold' },
        padding: 20,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: { size: 13, weight: 'bold' },
        bodyFont: { size: 12 },
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        callbacks: {
          label: (context) => {
            const value = context.parsed?.y;
            if (value === null || value === undefined || !isFinite(value)) {
              return `${context.dataset.label}: ∞`;
            }
            if (value > 1e15) {
              return `${context.dataset.label}: ${(value / 1e15).toFixed(2)}e15`;
            }
            if (value > 1e6) {
              return `${context.dataset.label}: ${(value / 1e6).toFixed(2)}e6`;
            }
            return `${context.dataset.label}: ${value.toFixed(0)}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: xAxisLabel,
          font: { size: 12, weight: 'bold' },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      y: {
        type: useLogScale ? 'logarithmic' : 'linear',
        title: {
          display: true,
          text: yAxisLabel,
          font: { size: 12, weight: 'bold' },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
    },
  };

  return (
    <div className="w-full h-full bg-white rounded-lg shadow-md p-4">
      <Line data={data} options={options} />
    </div>
  );
}