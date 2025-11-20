import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import "./css_telas/RoteamentoAereo.css"; 
import logoIcone from '../assets/imagens/Property 1=Default.svg';

// Registra os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Importa a imagem SVG



// --- Funções de Lógica (Adaptadas do JS original) ---

// Função para obter cores das variáveis CSS (adaptada para React)
const getCustomColors = () => {
    // Em um ambiente React/Vite, o CSS é carregado, mas as variáveis CSS precisam ser lidas do DOM
    // ou definidas diretamente no componente. Vamos usar a abordagem de leitura do DOM
    // ou valores padrão se não for possível ler imediatamente.
    const wrapper = document.querySelector('.airport-simulation-wrapper');
    if (wrapper) {
        const computedStyle = getComputedStyle(wrapper);
        return {
            classicalBarColor: computedStyle.getPropertyValue('--airport-classical-bar-color').trim() || '#A100FF',
            quantumBarColor: computedStyle.getPropertyValue('--airport-quantum-bar-color').trim() || '#2a36df',
            classicalBorderColor: computedStyle.getPropertyValue('--airport-classical-border-color').trim() || '#A100FF',
            quantumBorderColor: computedStyle.getPropertyValue('--airport-quantum-bar-color').trim() || '#2a36df',
            gridLineColor: computedStyle.getPropertyValue('--airport-grid-line-color').trim() || 'hsla(0, 19%, 92%, 0.1)',
            axisTextColor: computedStyle.getPropertyValue('--airport-axis-text-color').trim() || '#535253'
        };
    }
    // Valores padrão se o componente ainda não estiver montado
    return {
        classicalBarColor: ' #A100FF',
        quantumBarColor: ' #2a36df',
        classicalBorderColor: ' #A100FF',
        quantumBorderColor: ' #2a36df',
        gridLineColor: 'hsla(0, 19%, 92%, 0.1)',
        axisTextColor: 'rgb(70, 69, 70)'
    };
};

// Função para simular tempos de computação
const simulateComputationTimes = (numAirports) => {
    if (numAirports <= 1) return { classicalTime: 0, quantumTime: 0 };
    const classicalTime = Math.pow(2, numAirports) * 10;
    const quantumTime = Math.pow(numAirports, 1.5) * 5;
    return { classicalTime, quantumTime };
};

// --- Componente Principal ---

const RoteamentoAereo = () => {
    const [numAirports, setNumAirports] = useState(parseInt(localStorage.getItem('numAirports') || 0));
    const airportVisualizationRef = useRef(null);
    const containerRef = useRef(null);

    // Efeito para persistir o estado do slider (opcional, mas bom para UX)
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
            airportIcon.className = 'airport-icon';
            airportIcon.style.left = `${airport.x}px`;
            airportIcon.style.top = `${airport.y}px`;
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
                line.setAttribute('stroke', '#007bff');
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
        // A visualização precisa ser atualizada após a montagem e sempre que o numAirports mudar
        // e também quando o tamanho do container mudar (por isso o ResizeObserver)
        updateAirportVisualization(numAirports);
    }, [numAirports, updateAirportVisualization]);

    // Lógica para o gráfico
    const { classicalTime, quantumTime } = simulateComputationTimes(numAirports);
    const colors = getCustomColors();

    const chartData = {
        labels: ['Clássico', 'Quântico'],
        datasets: [{
            label: 'Tempo (ms)',
            data: [classicalTime, quantumTime],
            backgroundColor: [
                colors.classicalBarColor,
                colors.quantumBarColor
            ],
            borderColor: [
                colors.classicalBorderColor,
                colors.quantumBorderColor
            ],
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
                    text: 'Tempo (ms)',
                    color: colors.axisTextColor
                },
                ticks: {
                    color: colors.axisTextColor
                },
                grid: {
                    color: colors.gridLineColor
                }
            },
            x: {
                ticks: {
                    color: colors.axisTextColor
                },
                grid: {
                    color: colors.gridLineColor
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
            <div className="content-wrapper" ref={containerRef}>
                <header className="header">
                    {/* O link/botão/visual da logo foi removido aqui. */}
                    <nav></nav>
                </header>

            <main className="container">
                <h1 className="mais-title">
                    <span className="line-1">Problema de Roteamento Aéreo</span>
                </h1>

                <textarea className="text-box" readOnly value={`Companhias Aéreas precisam definir a melhor rota para cobrir diversos
aeroportos em um único trajeto, minimizando o tempo de voo e os custos de
operação.`}
                />
            </main>

            <div className="airport-simulation-wrapper">
                <div className="airport-simulation-container">
                    <div className="airport-simulation-area">
                        <h3>Simulação de Rotas de Aeroportos</h3>
                        {/* O ref é usado para que a função JS possa manipular o DOM */}
                        <div id="airport-visualization-sim" ref={airportVisualizationRef}>
                            {numAirports === 0 ? 'Nenhum aeroporto selecionado.' : null}
                        </div>
                    </div>
                    <div className="airport-controls-area">
                        <div className="airport-slider-container">
                            <label htmlFor="num-airports-sim">
                                Número de Aeroportos: <span id="airport-count-sim">{numAirports}</span>
                            </label>
                            <input
                                type="range"
                                id="num-airports-sim"
                                min="0"
                                max="10"
                                value={numAirports}
                                onChange={handleSliderChange}
                            />
                        </div>
                        <div className="airport-chart-container">
                            <h4>Tempo de Resolução</h4>
                            {/* Componente Bar do react-chartjs-2 */}
                            <Bar data={chartData} options={chartOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoteamentoAereo;