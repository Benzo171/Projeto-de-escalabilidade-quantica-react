import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, LogarithmicScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2'; // Importamos 'Line'

// Registra os componentes do Chart.js
ChartJS.register(
    CategoryScale, 
    LinearScale, 
    LogarithmicScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend, 
    LineElement, // Necessário para gráficos de linha
    PointElement // Necessário para gráficos de linha
);

// -------------------------------------------------------------------
// 1. CONFIGURAÇÃO DO BACKGROUND
// Use um placeholder genérico relacionado a tecnologia/dados por enquanto.
const BACKGROUND_IMAGE_URL = 'https://images.unsplash.com/photo-1518770660439-46361909873d?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; 
// -------------------------------------------------------------------

// --- Funções de Lógica ---

// Função para formatar números grandes para exibição (ex: 4000000 -> 4.00M)
const formatSteps = (num) => {
    if (num >= 1e9) {
        return (num / 1e9).toFixed(2) + 'B'; // Bilhões
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(2) + 'M'; // Milhões
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K'; // Milhares
    }
    return Math.round(num).toString();
};

// Função para simular passos/operações (substituindo o tempo)
const simulateComputationSteps = (numAirports) => {
    if (numAirports <= 1) return { classicalSteps: 0, quantumSteps: 0 };
    
    // Simulação de passos/operações:
    // Clássico: Crescimento exponencial O(2^N). Multiplicador de 1000 para efeito visual.
    // Quântico: Crescimento polinomial O(N^2) para ilustração. Multiplicador de 10.
    
    const classicalSteps = Math.pow(2, numAirports) * 1000; 
    const quantumSteps = Math.pow(numAirports, 2) * 10; 
    
    return { 
        classicalSteps: classicalSteps,
        quantumSteps: quantumSteps 
    };
};

// --- Componente Principal ---

const RoteamentoAereoTailwind = () => {
    // Usando 5 como valor inicial se o localStorage estiver vazio para já ter algo para visualizar
    const initialAirports = parseInt(localStorage.getItem('numAirports') || 5);
    // Garante que o valor inicial não exceda o novo máximo de 15
    const [numAirports, setNumAirports] = useState(Math.min(initialAirports, 15)); 
    const airportVisualizationRef = useRef(null);
    const containerRef = useRef(null);

    // Efeito para persistir o estado do slider (opcional)
    useEffect(() => {
        localStorage.setItem('numAirports', numAirports);
    }, [numAirports]);

    // Função para atualizar a visualização dos aeroportos
    const updateAirportVisualization = useCallback((count) => {
        const div = airportVisualizationRef.current;
        if (!div) return;

        div.innerHTML = ''; // Limpa o conteúdo anterior

        if (count === 0) {
            div.textContent = 'Nenhum aeroporto selecionado.';
            return;
        }

        const airports = [];
        const width = div.offsetWidth;
        const height = div.offsetHeight;

        for (let i = 0; i < count; i++) {
            // Garante que o ponto não fique muito na borda
            const x = Math.random() * (width - 40) + 20; 
            const y = Math.random() * (height - 40) + 20;
            airports.push({ id: i + 1, x, y });
        }

        // Adiciona os ícones dos aeroportos
        airports.forEach(airport => {
            const airportIcon = document.createElement('span');
            // Estilos para o ícone de avião (airport-icon)
            airportIcon.className = 'absolute cursor-pointer text-purple-400 text-xl transition-all duration-200 hover:text-purple-600 hover:scale-125 hover:rotate-12';
            airportIcon.style.left = `${airport.x}px`;
            airportIcon.style.top = `${airport.y}px`;
            airportIcon.style.transform = 'translate(-50%, -50%)'; // Centraliza o ícone
            airportIcon.title = `Aeroporto ${airport.id}`;
            airportIcon.innerHTML = '✈';
            div.appendChild(airportIcon);
        });

        // Adiciona as linhas de conexão (SVG) - Representando uma possível rota
        if (count > 1) {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.style.position = 'absolute';
            svg.style.top = '0';
            svg.style.left = '0';
            svg.style.width = '100%';
            svg.style.height = '100%';
            svg.style.pointerEvents = 'none';
            svg.style.zIndex = '1';

            // Conecta todos os aeroportos em sequência (simulando uma rota TSP)
            for (let i = 0; i < airports.length - 1; i++) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', airports[i].x);
                line.setAttribute('y1', airports[i].y);
                line.setAttribute('x2', airports[i + 1].x);
                line.setAttribute('y2', airports[i + 1].y);
                line.setAttribute('stroke', '#3b82f6'); // Cor azul do Tailwind (blue-500)
                line.setAttribute('stroke-width', '1');
                line.setAttribute('stroke-dasharray', '5,5'); // Linha tracejada
                line.setAttribute('opacity', '0.5');
                svg.appendChild(line);
            }
            // Conectar o último ao primeiro para fechar o ciclo (TSP)
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', airports[airports.length - 1].x);
            line.setAttribute('y1', airports[airports.length - 1].y);
            line.setAttribute('x2', airports[0].x);
            line.setAttribute('y2', airports[0].y);
            line.setAttribute('stroke', '#3b82f6');
            line.setAttribute('stroke-width', '1');
            line.setAttribute('stroke-dasharray', '5,5');
            line.setAttribute('opacity', '0.5');
            svg.appendChild(line);


            div.appendChild(svg);
        }
    }, []);

    // Efeito para atualizar a visualização quando o número de aeroportos mudar
    useEffect(() => {
        updateAirportVisualization(numAirports);
    }, [numAirports, updateAirportVisualization]);

    // Lógica para o gráfico
    const { classicalSteps, quantumSteps } = simulateComputationSteps(numAirports);
    
    // Cores fixas inspiradas em Tailwind/Accenture
    const classicalColor = '#A100FF'; // Cor roxa
    const quantumColor = '#2a36df'; // Cor azul/índigo
    // const speedupColor = '#10b981'; // Cor verde (emerald-500) - Não mais usado para linha única

    // -------------------------------------------------------
    // GRÁFICO 1: Passos Computacionais (Escala Logarítmica)
    // -------------------------------------------------------
    const chartData = {
        labels: ['Clássico', 'Quântico'],
        datasets: [{
            label: 'Passos (Operações)', 
            data: [classicalSteps, quantumSteps],
            backgroundColor: [classicalColor, quantumColor],
            borderColor: [classicalColor, quantumColor],
            borderWidth: 1,
            borderRadius: 5,
        }]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Passos Computacionais ', 
                    color: '#9ca3af' // gray-400
                },
                ticks: {
                    color: '#9ca3af', // gray-400
                    // Usa a função de formatação para ticks (ex: 4M)
                    callback: function(value) {
                        return formatSteps(value);
                    }
                },
                type: 'logarithmic', 
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)' // Linhas de grade
                }
            },
            x: {
                ticks: {
                    color: '#9ca3af' // gray-400
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)' // Linhas de grade
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            // Usa a formatação amigável e adiciona a notação científica para precisão
                            label += formatSteps(context.parsed.y);
                            label += ` (${context.parsed.y.toExponential(2)})`;
                        }
                        return label;
                    }
                }
            }
        }
    };
    
    // -------------------------------------------------------
    // GRÁFICO 2: Comparação de Passos Clássico vs Quântico (Linha)
    // -------------------------------------------------------

    // Gera dados de passos (Classical e Quantum) para N=1 até o valor atual do slider
    const comparisonDataPoints = Array.from({ length: numAirports }, (_, i) => {
        const N = i + 1;
        const { classicalSteps: c, quantumSteps: q } = simulateComputationSteps(N);
        return { N, classical: c, quantum: q };
    });

    const ratioChartData = {
        labels: comparisonDataPoints.map(p => p.N),
        datasets: [
            {
                label: 'Clássico',
                data: comparisonDataPoints.map(p => p.classical),
                backgroundColor: classicalColor,
                borderColor: classicalColor,
                borderWidth: 3,
                fill: false,
                tension: 0.1, // Suaviza a linha
                pointRadius: 4,
                pointBackgroundColor: classicalColor,
                pointBorderColor: '#fff',
            },
            {
                label: 'Quântico',
                data: comparisonDataPoints.map(p => p.quantum),
                backgroundColor: quantumColor,
                borderColor: quantumColor,
                borderWidth: 3,
                fill: false,
                tension: 0.1, // Suaviza a linha
                pointRadius: 4,
                pointBackgroundColor: quantumColor,
                pointBorderColor: '#fff',
            }
        ],
    };

    const ratioChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                title: {
                    display: true,
                    // NOVO TÍTULO
                    text: 'Passos Computacionais ',
                    color: '#9ca3af'
                },
                ticks: {
                    color: '#9ca3af',
                    callback: function(value) {
                        return formatSteps(value);
                    }
                },
                type: 'logarithmic', // Mantém logarítmico para mostrar a curva exponencial
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                min: 1, // Mínimo de 1 para acomodar a escala logarítmica
            },
            x: {
                title: {
                    display: true,
                    text: 'Número de Aeroportos (N)',
                    color: '#9ca3af'
                },
                ticks: {
                    color: '#9ca3af'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        },
        plugins: {
            legend: {
                display: true, // Habilita a legenda para distinguir as duas linhas
                position: 'top',
                labels: {
                    color: '#fff'
                }
            },
            tooltip: {
                callbacks: {
                    title: function(context) {
                        return `N = ${context[0].label}`;
                    },
                    label: function(context) {
                        const datasetLabel = context.dataset.label || '';
                        const value = context.parsed.y;
                        // Mostra passos formatados e notação científica
                        return `${datasetLabel}: ${formatSteps(value)} passos (${value.toExponential(2)})`;
                    }
                }
            }
        }
    };


    // Função para lidar com a mudança do slider
    const handleSliderChange = (event) => {
        setNumAirports(parseInt(event.target.value));
    };

    return (
        // APLICANDO O BACKGROUND DA HOMEPAGE AQUI:
        <div 
            className="min-h-screen text-white p-4 sm:p-8 font-['Inter',_sans-serif]"
            style={{
                backgroundImage: `url('${BACKGROUND_IMAGE_URL}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed', // Efeito Parallax
                backgroundColor: '#1f2937' // Cor sólida de fallback se a imagem falhar (gray-800)
            }}
        >
            
            {/* content-wrapper - AGORA COM BACKGROUND ESCURO PARA GARANTIR VISIBILIDADE */}
            <div className="relative z-10 w-full flex flex-col min-h-screen bg-gray-900/95 rounded-xl shadow-2xl p-4 sm:p-0" ref={containerRef}>
                
                <header className="flex justify-center p-4">
                    <h1 className="text-center w-full text-purple-400 text-4xl sm:text-6xl font-extrabold tracking-wider">
                        <span className="line-1">TSP </span>
                    </h1>
                </header>

                {/* container */}
                <main className="flex flex-col items-center w-full mx-auto p-0 flex-grow">
                    
                    {/* text-box */}
                    <div className="w-[90%] max-w-[800px] p-4 border-2 border-indigo-500 rounded-xl bg-gray-900/90 text-white text-base sm:text-lg text-center mt-6 shadow-2xl backdrop-blur-sm">
                        <p className="font-light">
                        Companhias Aéreas precisam definir a melhor rota para cobrir diversos aeroportos em um único trajeto, minimizando o tempo de voo e os custos de operação. </p>
                    </div>

                    {/* airport-simulation-wrapper (Contém slider, visualização e GRÁFICO 1) */}
                    <div className="w-full max-w-[1000px] mx-auto my-8 font-['Inter',_sans-serif]">
                        
                        {/* airport-simulation-container */}
                        <div className="flex flex-col lg:flex-row bg-gray-950/80 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-indigo-700">
                            
                            {/* airport-simulation-area */}
                            <div className="flex-2 p-6 border-b lg:border-b-0 lg:border-r border-indigo-800 flex flex-col items-center justify-center min-h-[350px]">
                                <h3 className="text-gray-100 mb-5 text-xl font-semibold">Simulação de Rotas ({numAirports} Aeroportos)</h3>
                                
                                {/* airport-visualization-sim */}
                                <div 
                                    id="airport-visualization-sim" 
                                    ref={airportVisualizationRef}
                                    className="w-full h-[300px] border border-dashed border-gray-400/50 flex justify-center items-center text-gray-500 italic bg-gray-800/50 rounded-lg relative overflow-hidden"
                                >
                                    {numAirports === 0 ? 'Nenhum aeroporto selecionado.' : null}
                                </div>
                            </div>
                            
                            {/* airport-controls-area (GRÁFICO 1) */}
                            <div className="flex-1 p-6 flex flex-col justify-between min-w-[300px]">
                                
                                {/* airport-slider-container */}
                                <div className="mb-8">
                                    <label htmlFor="num-airports-sim" className="block mb-2 font-bold text-sm text-gray-100">
                                        Número de Aeroportos (N): <span className="text-purple-400 font-extrabold">{numAirports}</span>
                                    </label>
                                    <input
                                        type="range"
                                        id="num-airports-sim"
                                        min="0"
                                        max="15" // Aumentado para 15
                                        value={numAirports}
                                        onChange={handleSliderChange}
                                        className="w-full h-2 bg-indigo-800 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-purple-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg"
                                    />
                                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                                        <span>0</span>
                                        <span>15</span> 
                                    </div>
                                </div>
                                
                                {/* airport-chart-container (GRÁFICO 1) */}
                                <div className="flex-grow flex flex-col justify-center">
                                    <h4 className="text-center mb-4 text-gray-100 text-lg font-semibold">Passos Computacionais </h4>
                                    
                                    <div className="text-xs text-center mb-4 space-y-1">
                                        <p className="text-purple-400">Clássico: ~{formatSteps(classicalSteps)} passos</p>
                                        <p className="text-indigo-400">Quântico: ~{formatSteps(quantumSteps)} passos</p>
                                    </div>

                                    {/* Componente Bar do react-chartjs-2 */}
                                    <div className="w-full h-auto max-h-[220px]">
                                        <Bar data={chartData} options={chartOptions} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* GRÁFICO 2: Comparação de Passos Clássico vs Quântico */}
                    <div className="w-full max-w-[1000px] mx-auto mb-8 font-['Inter',_sans-serif]">
                        <div className="bg-gray-950/80 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-purple-700 p-6">
                            <h3 className="text-gray-100 mb-5 text-xl font-semibold text-center">
                                Curvas de Complexidade Algorítmica 
                            </h3>
                            <div className="w-full h-[250px] flex justify-center items-center">
                                {/* Usando Line Chart para visualizar o crescimento da complexidade */}
                                <Line data={ratioChartData} options={ratioChartOptions} /> 
                            </div>
                            <p className="text-sm text-gray-400 text-center mt-4">
                                A diferença de complexidade entre o algoritmo Clássico (Exponencial) e o Quântico (Polinomial) torna-se dramaticamente evidente conforme o problema (N) cresce. O eixo Y está em escala logarítmica.
                            </p>
                        </div>
                    </div>

                    

                </main>
            </div>
        </div>
    );
};

export default RoteamentoAereoTailwind;