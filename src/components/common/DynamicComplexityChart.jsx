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
        borderColor: '#A855F7', // roxo para clássico
        backgroundColor: 'rgba(168, 85, 247, 0.18)',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: '#A855F7',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 7,
      },
      {
        label: quantumLabel,
        data: quantumData,
        borderColor: '#7C3AED', // roxo mais escuro para quântico
        backgroundColor: 'rgba(124, 58, 237, 0.18)',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: '#7C3AED',
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
          color: '#ffffff', // Cor do texto da legenda
          font: { size: 12, weight: 'bold' },
          padding: 15,
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: title,
        color: '#ffffff', // Cor do título do gráfico
        font: { size: 16, weight: 'bold' },
        padding: 20,
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)', // Fundo escuro (Slate 900)
        titleColor: '#ffffff', // Cor do título do tooltip
        bodyColor: '#e2e8f0', // Cor do texto do corpo (Slate 200)
        padding: 12,
        titleFont: { size: 13, weight: 'bold' },
        bodyFont: { size: 12 },
        borderColor: 'rgba(96, 30, 249, 0.3)', // Borda roxa sutil no tooltip
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
          color: '#ffffff', // Cor do título do eixo X
          font: { size: 12, weight: 'bold' },
        },
        ticks: {
          color: '#cbd5e1', // Cor dos números do eixo X (Slate 300)
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Linhas de grade brancas transparentes
        },
      },
      y: {
        type: useLogScale ? 'logarithmic' : 'linear',
        title: {
          display: true,
          text: yAxisLabel,
          color: '#ffffff', // Cor do título do eixo Y
          font: { size: 12, weight: 'bold' },
        },
        ticks: {
          color: '#cbd5e1', // Cor dos números do eixo Y (Slate 300)
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Linhas de grade brancas transparentes
        },
      },
    },
  };

  return (
    // Removi bg-[] e coloquei bg-transparent para usar o fundo do card pai
    <div className="w-full h-full bg-transparent rounded-lg p-2">
      <Line data={data} options={options} />
    </div>
  );
}