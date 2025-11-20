import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Registra os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// --- Funções de Lógica (Adaptadas do JS original) ---

// Função para simular passos/operações (substituindo o tempo)
const simulateComputationSteps = (numAirports) => {
    if (numAirports <= 1) return { classicalSteps: 0, quantumSteps: 0 };
    
    // Simulação de passos/operações:
    // Clássico: Crescimento exponencial (2^N)
    // Quântico: Crescimento polinomial (N^1.5)
    const classicalSteps = Math.pow(2, numAirports) * 10; 
    const quantumSteps = Math.pow(numAirports, 1.5) * 5; 
    return { classicalSteps, quantumSteps };
};

// --- Componente Principal ---

const RoteamentoAereoTailwind = () => {
    const [numAirports, setNumAirports] = useState(parseInt(localStorage.getItem('numAirports') || 0));
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
            const x = Math.random() * (width - 40) + 20;
            const y = Math.random() * (height - 40) + 20;
            airports.push({ id: i + 1, x, y });
        }

        // Adiciona os ícones dos aeroportos
        airports.forEach(airport => {
            const airportIcon = document.createElement('span');
            // Estilos para o ícone de avião (airport-icon)
            airportIcon.className = 'absolute cursor-pointer text-purple-500 text-xl transition-all duration-200 hover:text-purple-700 hover:scale-125 hover:rotate-12';
            airportIcon.style.left = `${airport.x}px`;
            airportIcon.style.top = `${airport.y}px`;
            airportIcon.style.transform = 'translate(-50%, -50%)'; // Centraliza o ícone
            airportIcon.title = `Aeroporto ${airport.id}`;
            airportIcon.innerHTML = '✈';
            div.appendChild(airportIcon);
        });

        // Adiciona as linhas de conexão (SVG)
        if (count > 1) {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.style.position = 'absolute';
            svg.style.top = '0';
            svg.style.left = '0';
            svg.style.width = '100%';
            svg.style.height = '100%';
            svg.style.pointerEvents = 'none';
            svg.style.zIndex = '1';

            for (let i = 0; i < airports.length - 1; i++) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', airports[i].x);
                line.setAttribute('y1', airports[i].y);
                line.setAttribute('x2', airports[i + 1].x);
                line.setAttribute('y2', airports[i + 1].y);
                line.setAttribute('stroke', '#3b82f6'); // Cor azul do Tailwind (blue-500)
                line.setAttribute('stroke-width', '1');
                line.setAttribute('stroke-dasharray', '5,5');
                line.setAttribute('opacity', '0.5');
                svg.appendChild(line);
            }

            div.appendChild(svg);
        }
    }, []);

    // Efeito para atualizar a visualização quando o número de aeroportos mudar
    useEffect(() => {
        updateAirportVisualization(numAirports);
    }, [numAirports, updateAirportVisualization]);

    // Lógica para o gráfico
    const { classicalSteps, quantumSteps } = simulateComputationSteps(numAirports);
    
    // Cores fixas do Tailwind (substituindo as variáveis CSS)
    const classicalColor = '#A100FF'; // Cor roxa da Accenture
    const quantumColor = '#2a36df'; // Cor azul/índigo

    const chartData = {
        labels: ['Clássico', 'Quântico'],
        datasets: [{
            label: 'Passos', // Métrica atualizada
            data: [classicalSteps, quantumSteps],
            backgroundColor: [classicalColor, quantumColor],
            borderColor: [classicalColor, quantumColor],
            borderWidth: 1
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
                    text: 'Passos (Operações)', // Título atualizado
                    color: '#9ca3af' // gray-400
                },
                ticks: {
                    color: '#9ca3af' // gray-400
                },
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
            }
        }
    };

    // Função para lidar com a mudança do slider
    const handleSliderChange = (event) => {
        setNumAirports(parseInt(event.target.value));
    };

    return (
        // body { background-color: black; padding: 15px 20px; color: white; }
        // O estilo do body deve ser aplicado no Layout ou no CSS global. Aqui aplicamos o padding e cor do texto.
        <div className="min-h-screen bg-black text-white p-4 sm:p-5 font-['Josefin_Sans',_sans-serif]">
            
            {/* content-wrapper */}
            <div className="relative z-10 w-full flex flex-col min-h-screen bg-transparent" ref={containerRef}>
                
                {/* header (removido o logo animado para simplificar com Tailwind) */}
                <header className="flex justify-end">
                    <nav></nav>
                </header>

                {/* container */}
                <main className="flex flex-col items-center w-full mx-auto p-0">
                    
                    {/* mais-title */}
                    <h1 className="text-center w-full pt-4 text-white text-4xl sm:text-5xl font-['Josefin_Sans',_sans-serif]">
                        <span className="line-1">Problema de Roteamento Aéreo</span>
                    </h1>

                    {/* text-box */}
                    <textarea 
                        className="w-[90%] max-w-[1200px] h-[100px] p-8 border-2 border-purple-500 rounded-lg bg-gray-900 text-white text-lg resize-none outline-none font-['Josefin_Sans',_sans-serif] text-center pt-2 overflow-hidden mt-8"
                        readOnly 
                        value={`Companhias Aéreas precisam definir a melhor rota para cobrir diversos
aeroportos em um único trajeto, minimizando o tempo de voo e os custos de
operação.`}
                    />
                </main>

                {/* airport-simulation-wrapper */}
                <div className="w-full max-w-[1000px] mx-auto my-5 font-['Josefin_Sans',_sans-serif]">
                    
                    {/* airport-simulation-container */}
                    <div className="flex flex-col lg:flex-row bg-gray-950 rounded-lg shadow-lg overflow-hidden border border-gray-700">
                        
                        {/* airport-simulation-area */}
                        <div className="flex-2 p-5 border-b lg:border-b-0 lg:border-r border-gray-800 flex flex-col items-center justify-center">
                            <h3 className="text-gray-100 mb-5 text-lg">Simulação de Rotas de Aeroportos</h3>
                            
                            {/* airport-visualization-sim */}
                            <div 
                                id="airport-visualization-sim" 
                                ref={airportVisualizationRef}
                                className="w-full h-[300px] border border-dashed border-gray-400 flex justify-center items-center text-gray-500 italic bg-gray-200 rounded-md relative"
                            >
                                {numAirports === 0 ? 'Nenhum aeroporto selecionado.' : null}
                            </div>
                        </div>
                        
                        {/* airport-controls-area */}
                        <div className="flex-1 p-5 flex flex-col justify-between min-w-[250px]">
                            
                            {/* airport-slider-container */}
                            <div className="mb-8">
                                <label htmlFor="num-airports-sim" className="block mb-2 font-bold text-sm text-gray-100">
                                    Número de Aeroportos: <span id="airport-count-sim">{numAirports}</span>
                                </label>
                                <input
                                    type="range"
                                    id="num-airports-sim"
                                    min="0"
                                    max="10"
                                    value={numAirports}
                                    onChange={handleSliderChange}
                                    // Estilos do slider (Tailwind não tem classes prontas para thumb, então o estilo é simplificado)
                                    className="w-full h-2 bg-gray-600 rounded-full appearance-none cursor-pointer range-lg"
                                />
                            </div>
                            
                            {/* airport-chart-container */}
                            <div className="flex-grow flex flex-col justify-center">
                                <h4 className="text-center mb-4 text-gray-100 text-base">Tempo de Resolução (em Passos)</h4>
                                {/* Componente Bar do react-chartjs-2 */}
                                <div className="max-w-full h-auto max-h-[200px]">
                                    <Bar data={chartData} options={chartOptions} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoteamentoAereoTailwind;