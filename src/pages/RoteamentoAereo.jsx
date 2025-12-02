import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, LogarithmicScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2'; 

// Registra os componentes do Chart.js
ChartJS.register(
    CategoryScale, 
    LinearScale, 
    LogarithmicScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend, 
    LineElement, 
    PointElement 
);

// -------------------------------------------------------------------
// 1. CONFIGURAÇÃO DO BACKGROUND
const BACKGROUND_IMAGE_URL = 'src/assets/imagens/MAPA.JPG';
const WORLD_MAP_IMAGE_URL = 'src/assets/imagens/mundi.png'; 
// -------------------------------------------------------------------

// --- Dados de Cidades da Região Metropolitana do Recife (RMR) e Proximidades ---
const CIDADES_PERNAMBUCO = [
    { nome: 'Recife', x: 200, y: 300 },
    { nome: 'Olinda', x: 220, y: 250 },
    { nome: 'Jaboatão', x: 180, y: 350 },
    { nome: 'Paulista', x: 250, y: 200 },
    { nome: 'Camaragibe', x: 150, y: 280 },
    { nome: 'Cabo', x: 150, y: 450 },
    { nome: 'Igarassu', x: 300, y: 150 },
    { nome: 'São Lourenço', x: 120, y: 330 },
    { nome: 'Goiana', x: 350, y: 100 },
    { nome: 'Vitória', x: 50, y: 500 },
    { nome: 'Caruaru', x: 500, y: 600 },
    { nome: 'Gravatá', x: 400, y: 550 },
    { nome: 'Limoeiro', x: 550, y: 450 },
    { nome: 'Surubim', x: 600, y: 350 },
    { nome: 'Belo Jardim', x: 650, y: 700 },
    { nome: 'Petrolina', x: 800, y: 100 }, 
    { nome: 'Garanhuns', x: 700, y: 800 },
    { nome: 'Arcoverde', x: 850, y: 500 },
    { nome: 'Pesqueira', x: 450, y: 750 },
    { nome: 'Serra Talhada', x: 900, y: 300 }, 
];
// Usaremos as primeiras 20 cidades como o conjunto máximo de dados
const CIDADES_TOTAIS = CIDADES_PERNAMBUCO.slice(0, 20); 

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

// Função para simular passos/operações (Exponencial O(2^N) e Polinomial O(N^2))
const simulateComputationSteps = (numAirports) => {
    if (numAirports <= 1) return { classicalSteps: 0, quantumSteps: 0 };
    
    // Simulação de passos/operações para o Gráfico Geral
    const classicalSteps = Math.pow(2, numAirports) * 1000; 
    const quantumSteps = Math.pow(numAirports, 2) * 10; 
    
    return { 
        classicalSteps: classicalSteps,
        quantumSteps: quantumSteps 
    };
};

// Função para calcular o número real de rotas TSP (N-1)! / 2 (Complexidade Clássica do RMR)
const calculateTSPRoutes = (n) => {
    if (n < 2) return 0;
    let factorial = 1;
    for (let i = 2; i <= n - 1; i++) {
        factorial *= i;
    }
    // Retorna (N-1)! / 2. Usamos 1000 * para aumentar o valor e manter coerência visual com outros passos.
    return Math.floor(factorial / 2) * 1000; 
}

// Função para simular a complexidade quântica para o TSP (Polinomial O(N^3))
const simulateQuantumTSPSpeedup = (n) => {
    if (n < 1) return 0;
    // Usando O(N^3) com um multiplicador de 10.
    return Math.pow(n, 3) * 10; 
}


// --- Componente Principal ---

const RoteamentoAereoTailwind = () => {
    // Estado para o slider do Gráfico 1 (Max 25) - Geral
    const initialAirports = parseInt(localStorage.getItem('numAirports') || 5);
    const [numAirports, setNumAirports] = useState(Math.min(initialAirports, 25)); 
    
    // Estado para o slider de Cidades da RMR (Max 20)
    const initialRMRCities = parseInt(localStorage.getItem('numRMRCities') || 10);
    const [numRMRCities, setNumRMRCities] = useState(Math.min(initialRMRCities, 20)); 

    const airportVisualizationRef = useRef(null);
    const airportVisualizationRMRRef = useRef(null); 
    const containerRef = useRef(null);

    // Efeitos para persistir o estado do slider
    useEffect(() => {
        localStorage.setItem('numAirports', numAirports);
    }, [numAirports]);

    useEffect(() => {
        localStorage.setItem('numRMRCities', numRMRCities);
    }, [numRMRCities]);


    // Funções de visualização (Mantidas)
    const updateAirportVisualization = useCallback((count, ref) => {
        const div = ref.current;
        if (!div) return;
        div.innerHTML = ''; 
        if (count === 0) { div.textContent = 'Nenhum aeroporto selecionado.'; return; }
        const airports = [];
        const width = div.offsetWidth;
        const height = div.offsetHeight;
        for (let i = 0; i < count; i++) {
            const x = Math.random() * (width - 40) + 20; 
            const y = Math.random() * (height - 40) + 20;
            airports.push({ id: i + 1, x, y });
        }
        airports.forEach(airport => {
            const airportIcon = document.createElement('span');
            airportIcon.className = 'absolute cursor-pointer text-purple-400 text-xl transition-all duration-200 hover:text-purple-600 hover:scale-125 hover:rotate-12';
            airportIcon.style.left = `${airport.x}px`;
            airportIcon.style.top = `${airport.y}px`;
            airportIcon.style.transform = 'translate(-50%, -50%)'; 
            airportIcon.title = `Aeroporto ${airport.id}`;
            airportIcon.innerHTML = '✈';
            div.appendChild(airportIcon);
        });
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
                line.setAttribute('stroke', '#A855F7'); 
                line.setAttribute('stroke-width', '1');
                line.setAttribute('stroke-dasharray', '5,5'); 
                line.setAttribute('opacity', '0.5');
                svg.appendChild(line);
            }
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', airports[airports.length - 1].x);
            line.setAttribute('y1', airports[airports.length - 1].y);
            line.setAttribute('x2', airports[0].x);
            line.setAttribute('y2', airports[0].y);
            line.setAttribute('stroke', '#A855F7');
            line.setAttribute('stroke-width', '1');
            line.setAttribute('stroke-dasharray', '5,5');
            line.setAttribute('opacity', '0.5');
            svg.appendChild(line);

            div.appendChild(svg);
        }
    }, []);

    const updateRMRVisualization = useCallback((count, ref) => {
        const div = ref.current;
        if (!div) return;

        div.innerHTML = ''; 
        
        if (count < 2) {
             div.textContent = count === 0 ? 'Mínimo de 2 cidades necessário.' : 'Mínimo de 2 cidades necessário.';
             return;
        }
        
        const cidadesAtuais = CIDADES_TOTAIS.slice(0, count);

        const width = div.offsetWidth;
        const height = div.offsetHeight;
        const maxCoord = 900; 
        const scaleX = width / (maxCoord * 1.2); 
        const scaleY = height / (maxCoord * 1.2); 

        const airports = cidadesAtuais.map((cidade, index) => {
            const x = cidade.x * scaleX + (width * 0.1); 
            const y = cidade.y * scaleY + (height * 0.1);
            return { id: index + 1, nome: cidade.nome, x: Math.min(x, width - 20), y: Math.min(y, height - 20) };
        });

        airports.forEach(airport => {
            const cityDot = document.createElement('div');
            cityDot.className = 'absolute rounded-full w-3 h-3 bg-purple-500 transition-all duration-200 hover:bg-purple-300 hover:scale-150';
            cityDot.style.left = `${airport.x}px`;
            cityDot.style.top = `${airport.y}px`;
            cityDot.style.transform = 'translate(-50%, -50%)'; 
            cityDot.title = `Cidade: ${airport.nome}`;
            div.appendChild(cityDot);

            const cityName = document.createElement('span');
            cityName.className = 'absolute text-xs text-gray-200 pointer-events-none whitespace-nowrap';
            cityName.style.left = `${airport.x + 8}px`; 
            cityName.style.top = `${airport.y}px`;
            cityName.style.transform = 'translateY(-50%)';
            cityName.textContent = airport.nome;
            div.appendChild(cityName);
        });

        if (airports.length > 1) {
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
                line.setAttribute('stroke', '#A855F7'); 
                line.setAttribute('stroke-width', '1');
                line.setAttribute('stroke-dasharray', '5,5');
                line.setAttribute('opacity', '0.5');
                svg.appendChild(line);
            }
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', airports[airports.length - 1].x);
            line.setAttribute('y1', airports[airports.length - 1].y);
            line.setAttribute('x2', airports[0].x);
            line.setAttribute('y2', airports[0].y);
            line.setAttribute('stroke', '#A855F7');
            line.setAttribute('stroke-width', '1');
            line.setAttribute('stroke-dasharray', '5,5');
            line.setAttribute('opacity', '0.5');
            svg.appendChild(line);

            div.appendChild(svg);
        }
    }, []);


    // Efeitos para atualizar as visualizações
    useEffect(() => {
        updateAirportVisualization(numAirports, airportVisualizationRef);
    }, [numAirports, updateAirportVisualization]);

    useEffect(() => {
        updateRMRVisualization(numRMRCities, airportVisualizationRMRRef);
    }, [numRMRCities, updateRMRVisualization]);


    // Lógica para os gráficos
    const { classicalSteps, quantumSteps } = simulateComputationSteps(numAirports);
    
    // Cores fixas (tudo na paleta roxa)
    const classicalColor = '#A855F7'; // roxo claro para clássico
    const quantumColor = '#7C3AED';   // roxo mais escuro para quântico
    const rmrFatorialColor = '#C4A1FF'; // roxo claro para TSP Clássico (Fatorial)
    const rmrQuantumColor = '#7C3AED';  // roxo escuro para TSP Quântico (Polinomial)

    // -------------------------------------------------------
    // GRÁFICO 1: Passos Computacionais (Escala Logarítmica) - AJUSTADO
    // -------------------------------------------------------
    const chartData = {
        labels: ['Clássico', 'Quântico'],
        datasets: [{
            label: 'Passos (Operações)', 
            data: [classicalSteps, quantumSteps],
            backgroundColor: [classicalColor, quantumColor],
            borderColor: [classicalColor, quantumColor],
            borderWidth: 1,
            borderRadius: 8, // Ajustado para ser mais arredondado
        }]
    };

    const chartOptions = {
        responsive: true, maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: 'Passos Computacionais ', color: '#9ca3af' },
                ticks: { color: '#9ca3af', callback: (value) => formatSteps(value) },
                type: 'logarithmic', 
                grid: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            x: { 
                ticks: { 
                    color: '#9ca3af',
                    font: { size: 14 }, // Tamanho da fonte do eixo X
                    maxRotation: 0, // Garante que o texto seja horizontal
                    minRotation: 0, // Garante que o texto seja horizontal
                }, 
                grid: { color: 'rgba(255, 255, 255, 0.1)' } 
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) { label += ': '; }
                        if (context.parsed.y !== null) {
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
    // GRÁFICO 2: Complexidade Geral (Escala LINEAR) - MANTIDO
    // -------------------------------------------------------
    const comparisonDataPoints = Array.from({ length: numAirports }, (_, i) => {
        const N = i + 1;
        const { classicalSteps: c, quantumSteps: q } = simulateComputationSteps(N);
        return { N, classical: c, quantum: q };
    });

    const ratioChartData = {
        labels: comparisonDataPoints.map(p => p.N),
        datasets: [
            {
                label: 'Clássico (O(2^N))',
                data: comparisonDataPoints.map(p => p.classical),
                backgroundColor: classicalColor,
                borderColor: classicalColor,
                borderWidth: 3, fill: false, tension: 0.1, pointRadius: 4, pointBackgroundColor: classicalColor, pointBorderColor: '#fff',
            },
            {
                label: 'Quântico (O(N^2))',
                data: comparisonDataPoints.map(p => p.quantum),
                backgroundColor: quantumColor,
                borderColor: quantumColor,
                borderWidth: 3, fill: false, tension: 0.1, pointRadius: 4, pointBackgroundColor: quantumColor, pointBorderColor: '#fff',
            }
        ],
    };

    const ratioChartOptions = {
        responsive: true, maintainAspectRatio: false,
        scales: {
            y: {
                title: { display: true, text: 'Passos Computacionais ', color: '#9ca3af' },
                ticks: { color: '#9ca3af', callback: (value) => formatSteps(value) },
                type: 'linear', grid: { color: 'rgba(255, 255, 255, 0.1)' }, beginAtZero: true, 
            },
            x: {
                title: { display: true, text: 'Número de Aeroportos (N)', color: '#9ca3af' },
                ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255, 255, 255, 0.1)' }
            }
        },
        plugins: {
            legend: { display: true, position: 'top', labels: { color: '#fff' } },
            tooltip: {
                callbacks: {
                    title: (context) => `N = ${context[0].label}`,
                    label: (context) => {
                        const datasetLabel = context.dataset.label || '';
                        const value = context.parsed.y;
                        return `${datasetLabel}: ${formatSteps(value)} passos`;
                    }
                }
            }
        }
    };

    // -------------------------------------------------------
    // GRÁFICO 3: GRÁFICO DE BARRAS RMR (Bloco 3) - AJUSTADO
    // -------------------------------------------------------
    const rmrClassicalSteps = calculateTSPRoutes(numRMRCities);
    const rmrQuantumSteps = simulateQuantumTSPSpeedup(numRMRCities);

    const rmrBarChartData = {
        labels: ['Clássico', 'Quântico'],
        datasets: [{
            label: 'Passos Computacionais', 
            data: [rmrClassicalSteps, rmrQuantumSteps],
            backgroundColor: [rmrFatorialColor, rmrQuantumColor],
            borderColor: [rmrFatorialColor, rmrQuantumColor],
            borderWidth: 1,
            borderRadius: 8, // APLICADO: Ajustado para ser mais arredondado
        }]
    };

    const rmrBarChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: 'Passos Computacionais ', color: '#9ca3af' },
                ticks: {
                    color: '#9ca3af',
                    callback: function(value) {
                        return formatSteps(value);
                    }
                },
                type: 'logarithmic', 
                grid: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            x: { 
                ticks: { 
                    color: '#9ca3af', 
                    font: { size: 14 }, // APLICADO: Tamanho da fonte do eixo X
                    maxRotation: 0,    // APLICADO: Garante que o texto seja horizontal
                    minRotation: 0,    // APLICADO: Garante que o texto seja horizontal
                }, 
                grid: { color: 'rgba(255, 255, 255, 0.1)' } 
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) { label += ': '; }
                        if (context.parsed.y !== null) {
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
    // GRÁFICO 4: Complexidade do RMR (Fatorial vs. Polinomial - Logarítmica) - MANTIDO
    // -------------------------------------------------------
    
    // Gera dados de rotas reais (N-1)! / 2 (Clássico - Fatorial)
    const rmrDataPoints = Array.from({ length: numRMRCities }, (_, i) => {
        const N = i + 1;
        // Usamos a função original (N-1)!/2, sem multiplicador, pois o gráfico logarítmico cuida da escala
        const routes = calculateTSPRoutes(N) / 1000; 
        const quantumTime = simulateQuantumTSPSpeedup(N); 
        return { N, routes, quantumTime };
    });

    const rmrRoutesChartData = {
        labels: rmrDataPoints.map(p => p.N),
        datasets: [
            {
                label: 'Clássico: Rotas Possíveis (O(N!))',
                data: rmrDataPoints.map(p => p.routes),
                backgroundColor: rmrFatorialColor,
                borderColor: rmrFatorialColor,
                borderWidth: 3, fill: false, tension: 0.1, pointRadius: 4, pointBackgroundColor: rmrFatorialColor, pointBorderColor: '#fff', pointHitRadius: 10,
            },
            {
                label: 'Quântico: Rotas possíveis. (O(N^3))',
                data: rmrDataPoints.map(p => p.quantumTime),
                backgroundColor: rmrQuantumColor,
                borderColor: rmrQuantumColor,
                borderWidth: 3, fill: false, tension: 0.1, pointRadius: 4, pointBackgroundColor: rmrQuantumColor, pointBorderColor: '#fff', pointHitRadius: 10,
            },
        ],
    };

    const rmrRoutesChartOptions = {
        responsive: true, maintainAspectRatio: false,
        scales: {
            y: {
                title: { display: true, text: 'Número de Operações/Rotas ', color: '#9ca3af' },
                ticks: { color: '#9ca3af', callback: (value) => formatSteps(value) },
                type: 'logarithmic', // Escala Logarítmica para evidenciar a exponencial
                min: 1, 
                grid: { color: 'rgba(255, 255, 255, 0.1)' },
            },
            x: {
                title: { display: true, text: 'Número de Cidades (N)', color: '#9ca3af' },
                ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255, 255, 255, 0.1)' }
            }
        },
        plugins: {
            legend: { display: true, position: 'top', labels: { color: '#fff' } },
            tooltip: {
                callbacks: {
                    title: (context) => `Cidades (N) = ${context[0].label}`,
                    label: (context) => {
                        const value = context.parsed.y;
                        const label = context.dataset.label;
                        const formattedValue = value.toLocaleString('pt-BR', { maximumFractionDigits: 0 });
                        return `${label}: ${formattedValue} (${value.toExponential(2)})`;
                    }
                }
            }
        }
    };


    // Funções para lidar com a mudança do slider (Mantidas)
    const handleSliderChange = (event) => {
        setNumAirports(parseInt(event.target.value));
    };
    
    const handleRMRSliderChange = (event) => {
        setNumRMRCities(parseInt(event.target.value));
    };
    
    // O cálculo de numRotas só é usado no texto removido, mas mantemos as variáveis por segurança.
    const numRotas = calculateTSPRoutes(numRMRCities) / 1000; 
    const numRotasText = numRotas.toExponential(2).replace('e+', ' x 10^');
    const displayRotasText = numRMRCities <= 10 ? numRotas.toLocaleString('pt-BR', { maximumFractionDigits: 0 }) : numRotasText;


    // Fundo alinhado com as outras páginas internas (preto sólido)
    return (
        <div 
            className="min-h-screen bg-black text-white p-4 sm:p-8"
        >
            {/* content-wrapper */}
            <div className="relative z-10 w-full flex flex-col min-h-screen rounded-xl shadow-2xl p-4 sm:p-0" ref={containerRef}>
                
                <header className="flex justify-center p-4">
                    <h1 className="text-center w-full text-purple-600 text-4xl sm:text-6xl font-extrabold tracking-wider">
                        <span className="line-1">TSP</span>
                    </h1>
                </header>

                <main className="flex flex-col items-center w-full mx-auto p-0 flex-grow">
                    
                    <div className="w-[90%] max-w-[800px] p-4 border-2 border-purple-600 rounded-xl bg-gray-900/90 text-white text-base sm:text-lg text-center mt-6 shadow-2xl backdrop-blur-sm">
                        <p className="font-light">
                        Companhias Aéreas precisam definir a melhor rota para cobrir diversos aeroportos em um único trajeto, minimizando o tempo de voo e os custos de operação.  </p>
                    </div>

                    {/* GRÁFICO 1 + SIMULAÇÃO 1 (Geral) */}
                    <div className="w-full max-w-[1000px] mx-auto my-8 font-['Inter',_sans-serif]">
                        <div className="flex flex-col lg:flex-row bg-gray-950/80 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-purple-600">
                            
                            <div className="flex-2 p-6 border-b lg:border-b-0 lg:border-r border-purple-600 flex flex-col items-center justify-center min-h-[350px]">
                                <h3 className="text-gray-100 mb-5 text-xl font-semibold">Simulação de Rotas: ({numAirports} Aeroportos)</h3>
                                
                               
                                        <div 
                                        id="airport-visualization-sim" 
                                        ref={airportVisualizationRef}
                                        // 👇 ADICIONADO: Estilo para aplicar o Mapa Mundi
                                        style={{ 
                                            backgroundImage: `url(${WORLD_MAP_IMAGE_URL})`,
                                            backgroundSize: 'cover', // Ajusta a imagem para cobrir o div
                                            backgroundPosition: 'center', // Centraliza a imagem
                                        }}
                                        className="w-full h-[300px] border border-dashed border-gray-400/50 flex justify-center items-center text-gray-500 italic bg-gray-800/50 rounded-lg relative overflow-hidden"
                                    >
                                    {numAirports === 0 ? 'Nenhum aeroporto selecionado.' : null}
                                </div>
// ...
                            </div>
                            
                            <div className="flex-1 p-6 flex flex-col justify-between min-w-[300px]">
                                
                                <div className="mb-8">
                                    <label htmlFor="num-airports-sim" className="block mb-2 font-bold text-sm text-gray-100">
                                        Número de Aeroportos (N): <span className="text-purple-400 font-extrabold">{numAirports}</span>
                                    </label>
                                    <input
                                        type="range"
                                        id="num-airports-sim"
                                        min="0"
                                        max="25" 
                                        value={numAirports}
                                        onChange={handleSliderChange}
                                        className="w-full h-2 bg-indigo-800 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-purple-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg"
                                    />
                                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                                        <span>0</span>
                                        <span>25</span> 
                                    </div>
                                </div>
                                
                                <div className="flex-grow flex flex-col justify-center">
                                    <h4 className="text-center mb-4 text-gray-100 text-lg font-semibold">Passos Computacionais (N={numAirports})</h4>
                                    
                                    <div className="text-xs text-center mb-4 space-y-1">
                                        <p className="text-purple-400">Clássico: ~{formatSteps(classicalSteps)} passos</p>
                                        <p className="text-indigo-400">Quântico: ~{formatSteps(quantumSteps)} passos</p>
                                    </div>

                                    <div className="w-full h-auto max-h-[220px]">
                                        <Bar data={chartData} options={chartOptions} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    


                    {/* GRÁFICO 2: Comparação de Passos Clássico vs Quântico (Linha - Escala LINEAR) */}
                    <div className="w-full max-w-[1000px] mx-auto mb-8 font-['Inter',_sans-serif]">
                        <div className="bg-gray-950/80 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-purple-700 p-6">
                            <h3 className="text-gray-100 mb-5 text-xl font-semibold text-center">
                                Curvas de Complexidade Algorítmica (Escala Linear) 📊
                            </h3>
                            <div className="w-full h-[250px] flex justify-center items-center">
                                <Line data={ratioChartData} options={ratioChartOptions} /> 
                            </div>
                            <p className="text-sm text-gray-400 text-center mt-4">
                                A diferença de complexidade entre o algoritmo Clássico (Exponencial) e o Quântico (Polinomial) torna-se dramaticamente evidente conforme o problema cresce. Na escala linear, a curva Clássica domina rapidamente o gráfico.
                            </p>
                        </div>
                    </div>
                    
                    <hr className="w-full max-w-[1000px] border-purple-800 my-8"/>


                    {/* GRÁFICO 3 + SIMULAÇÃO (Cidades de Pernambuco) */}
                    <div className="w-full max-w-[1000px] mx-auto my-8 font-['Inter',_sans-serif]">
                         <div className="flex flex-col lg:flex-row bg-gray-950/80 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-purple-600/80">
                            
                            <div className="flex-2 p-6 border-b lg:border-b-0 lg:border-r border-purple-600/80 flex flex-col items-center justify-center min-h-[350px]">
                                <h3 className="text-gray-100 mb-5 text-xl font-semibold text-center">
                                    Exemplo Prático: Roteamento entre cidades: ({numRMRCities} Cidades) 📍
                                </h3>
                                
                                {/* SLIDER PARA CIDADES RMR */}
                                <div className="mb-6 w-full max-w-[300px] mx-auto">
                                    <label htmlFor="num-rmr-cities" className="block mb-2 font-bold text-sm text-gray-100 text-center">
                                        Cidades no Roteiro (N): <span className="text-purple-400 font-extrabold">{numRMRCities}</span>
                                    </label>
                                    <input
                                        type="range"
                                        id="num-rmr-cities"
                                        min="2"
                                        max="20" 
                                        value={numRMRCities}
                                        onChange={handleRMRSliderChange}
                                        className="w-full h-2 bg-purple-900 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-purple-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg"
                                    />
                                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                                        <span>2</span>
                                        <span>20</span> 
                                    </div>
                                </div>
                                
                                <div 
    ref={airportVisualizationRMRRef}
    // 👇 ADICIONADO: Estilo para aplicar a imagem de fundo como um mapa
    style={{ 
        backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
        backgroundSize: 'cover', // Garante que o mapa cubra toda a área
        backgroundPosition: 'center', // Centraliza a imagem
    }}
    className="w-full h-[300px] border border-dashed border-gray-400/50 flex justify-center items-center text-gray-500 italic bg-gray-800/50 rounded-lg relative overflow-hidden"
>
    {numRMRCities < 2 ? 'Selecione no mínimo 2 cidades.' : null}
</div>
                            </div>

                            {/* GRÁFICO DE BARRAS RMR */}
                            <div className="flex-1 p-6 flex flex-col justify-between min-w-[300px]">
                                <h4 className="text-center mb-4 text-gray-100 text-lg font-semibold">Passos Computacionais (N={numRMRCities})</h4>
                                    
                                <div className="text-xs text-center mb-4 space-y-1">
                                    <p className="text-purple-300">Clássico: ~{formatSteps(rmrClassicalSteps)} passos</p>
                                    <p className="text-purple-400">Quântico: ~{formatSteps(rmrQuantumSteps)} passos</p>
                                </div>

                                <div className="w-full h-auto max-h-[340px] flex-grow">
                                    <Bar data={rmrBarChartData} options={rmrBarChartOptions} />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* GRÁFICO 4: Complexidade Fatorial do Roteamento (Escala Logarítmica) */}
                    <div className="w-full max-w-[1000px] mx-auto mb-8 font-['Inter',_sans-serif]">
                        <div className="bg-gray-950/80 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-purple-700/80 p-6">
                            <h3 className="text-gray-100 mb-5 text-xl font-semibold text-center">
                                Comparação de Complexidade no Roteamento (Escala Logarítmica) 🚀
                            </h3>
                            <div className="w-full h-[250px] flex justify-center items-center">
                                <Line data={rmrRoutesChartData} options={rmrRoutesChartOptions} /> 
                            </div>
                            <p className="text-sm text-gray-400 text-center mt-4">
                                O gráfico logarítmico revela a diferença brutal entre a curva, que se torna quase vertical, e a curva simulada. O ganho de eficiência no algoritmo quântico é a chave para resolver problemas como o TSP em escala industrial.
                            </p>
                        </div>
                    </div>

                    
                </main>
            </div>
        </div>
    );
};

export default RoteamentoAereoTailwind;