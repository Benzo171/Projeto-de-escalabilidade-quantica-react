import { useState, useMemo } from 'react';

// ==========================================================
// 1. Funções de Cálculo (Simulando o '../util/complexityCalculations')
// ==========================================================

// Constante de operação por ano (estimativa de um supercomputador clássico)
// Aproximadamente 10^10 ops/seg * segundos em um ano
const OPS_PER_YEAR = 3.15e17; 

function calculateClassicalSearchComplexity(N) {
  return N; // Complexidade O(N) para busca não ordenada
}

function calculateGroverComplexity(N) {
  return Math.sqrt(N); // Complexidade O(√N) para o Algoritmo de Grover
}

function estimateTimeInYears(ops) {
  return ops / OPS_PER_YEAR;
}

// ==========================================================
// 2. Funções Utilitárias de Formatação (Mantidas)
// ==========================================================

// Função para converter números em linguagem comum
function formatNumberSimple(num) {
  if (num >= 1e18) return `${(num / 1e18).toFixed(1)} quintilhões`;
  if (num >= 1e15) return `${(num / 1e15).toFixed(1)} quadrilhões`;
  if (num >= 1e12) return `${(num / 1e12).toFixed(1)} trilhões`;
  if (num >= 1e9) return `${(num / 1e9).toFixed(1)} bilhões`;
  if (num >= 1e6) return `${(num / 1e6).toFixed(1)} milhões`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(1)} mil`;
  return num.toFixed(0);
}

// Função para converter tempo em linguagem comum
function formatTimeSimple(years) {
  if (years > 1e9) return `${(years / 1e9).toFixed(1)} bilhões de anos`;
  if (years > 1e6) return `${(years / 1e6).toFixed(1)} milhões de anos`;
  if (years > 1000) return `${(years / 1000).toFixed(1)} mil anos`;
  if (years > 1) return `${years.toFixed(1)} anos`;
  
  const days = years * 365.25;
  if (days > 1) return `${days.toFixed(1)} dias`;
  
  const hours = days * 24;
  if (hours > 1) return `${hours.toFixed(1)} horas`;
  
  const minutes = hours * 60;
  if (minutes > 1) return `${minutes.toFixed(1)} minutos`;
  
  const seconds = minutes * 60;
  if (seconds > 1) return `${seconds.toFixed(1)} segundos`;
  
  const ms = seconds * 1000;
  if (ms > 1) return `${ms.toFixed(1)} milissegundos`;
  
  // Se for muito rápido, usa microssegundos
  return `${(seconds * 1e6).toFixed(1)} microsegundos`;
}

// ==========================================================
// 3. Componente de Gráfico (Ajustado o tamanho para 300 de altura)
// ==========================================================

function DynamicComplexityChart({
  allLabels,
  allClassicalData,
  allQuantumData,
  currentIndex,
  classicalLabel,
  quantumLabel,
  xAxisLabel,
  yAxisLabel,
  useLogScale,
  title
}) {
  const width = 500;
  const height = 300; // Altura reduzida
  const padding = 50; // Padding ajustado
  const chartWidth = width - 2 * padding;
  const chartHeight = height - 2 * padding;
  
  const maxClassical = Math.max(...allClassicalData);
  const maxQuantum = Math.max(...allQuantumData);
  const globalMax = Math.max(maxClassical, maxQuantum);

  // Determinar a escala Y
  const yMax = useLogScale ? Math.log10(globalMax) : globalMax;
  const yMin = useLogScale ? 0 : 0;
  
  // Função de mapeamento para Y
  const mapY = (value) => {
    // Garantir que log de zero ou negativo não ocorra se log-scale estiver ativada
    const yValue = useLogScale && value > 1 ? Math.log10(value) : (useLogScale && value <= 1 ? yMin : value);
    return height - padding - (yValue - yMin) / (yMax - yMin) * chartHeight;
  };

  // Função para gerar pontos do SVG
  const generatePoints = (data) => {
    return data.map((value, index) => {
      // Ajustar X para usar toda a largura do gráfico
      const x = padding + (index / (data.length - 1)) * chartWidth;
      const y = mapY(value);
      return `${x},${y}`;
    }).join(' ');
  };

  const classicalPoints = generatePoints(allClassicalData);
  const quantumPoints = generatePoints(allQuantumData);

  // Posição do ponto atual
  const currentX = padding + (currentIndex / (allLabels.length - 1)) * chartWidth;
  const currentClassicalY = mapY(allClassicalData[currentIndex]);
  const currentQuantumY = mapY(allQuantumData[currentIndex]);

  return (
    <div className="flex flex-col h-full">
      {/* Título - Garantir que o título esteja fora do SVG, mas dentro do componente */}
      <h3 className="text-xl font-semibold mb-4 text-white text-center">{title}</h3> 
      <div className="flex-grow flex items-center justify-center">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
          {/* Eixo X */}
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#6B7280" />
          {/* Eixo Y */}
          <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#6B7280" />

          {/* Rótulo do Eixo Y - Posicionado para caber no novo padding */}
          <text x={10} y={height / 2} fill="white" fontSize="10" transform={`rotate(-90, 10, ${height / 2})`} textAnchor="middle">{yAxisLabel}</text>

          {/* Rótulos do Eixo X (amostra) */}
          {allLabels.map((label, index) => {
            // Mostrar apenas rótulos suficientes para evitar sobreposição (aprox. 5-6 rótulos)
            const step = Math.ceil(allLabels.length / 6);
            if (index % step === 0 || index === allLabels.length - 1) {
              const x = padding + (index / (allLabels.length - 1)) * chartWidth;
              // Ajustar a posição Y para evitar corte na parte inferior
              return (
                <text key={index} x={x} y={height - padding + 15} fill="white" fontSize="9" textAnchor="middle">
                  {label}
                </text>
              );
            }
            return null;
          })}
          
          {/* Rótulo do Eixo X */}
          <text x={width / 2} y={height - 5} fill="white" fontSize="10" textAnchor="middle">{xAxisLabel}</text>

          {/* Linha Clássica */}
          <polyline fill="none" stroke="#EF4444" strokeWidth="2" points={classicalPoints} />
          {/* Linha Quântica */}
          <polyline fill="none" stroke="#10B981" strokeWidth="2" points={quantumPoints} />

          {/* Ponto Atual Clássico */}
          <circle cx={currentX} cy={currentClassicalY} r="4" fill="#EF4444" stroke="white" strokeWidth="1.5" />
          {/* Ponto Atual Quântico */}
          <circle cx={currentX} cy={currentQuantumY} r="4" fill="#10B981" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Legenda */}
      <div className="flex justify-center space-x-6 mt-4 text-sm">
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
          <span className="text-gray-300">{classicalLabel}</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
          <span className="text-gray-300">{quantumLabel}</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// 4. Componente Principal
// ==========================================================

export default function DatabaseSearch() {
  // --- Simulação 1: Banco de Dados de Nomes (Original) ---
  const [exponent, setExponent] = useState(12);
  const databaseSize = Math.pow(10, exponent);

  // Gera todos os dados possíveis para o primeiro gráfico (exponente 2 a 18)
  const allChartData = useMemo(() => {
    const labels = [];
    const classicalData = [];
    const quantumData = [];

    for (let i = 2; i <= 18; i++) {
      const N = Math.pow(10, i);
      labels.push(N);
      classicalData.push(calculateClassicalSearchComplexity(N));
      quantumData.push(calculateGroverComplexity(N));
    }

    return { labels, classicalData, quantumData };
  }, []);

  // Encontra o índice correspondente ao valor atual do slider
  const currentIndex = useMemo(() => {
    return exponent - 2;
  }, [exponent]);

  // Calcula valores para o slider atual (Simulação 1)
  const classicalOps = useMemo(() => calculateClassicalSearchComplexity(databaseSize), [databaseSize]);
  const quantumOps = useMemo(() => calculateGroverComplexity(databaseSize), [databaseSize]);
  const classicalYears = useMemo(() => estimateTimeInYears(classicalOps), [classicalOps]);
  const quantumYears = useMemo(() => estimateTimeInYears(quantumOps), [quantumOps]);

  // Labels simplificados para o primeiro gráfico
  const simpleLabels = allChartData.labels.map((n) => {
    if (n === 100) return "100";
    if (n === 1000) return "1 mil";
    if (n === 1e6) return "1 milhão";
    if (n === 1e9) return "1 bilhão";
    if (n === 1e12) return "1 trilhão";
    if (n === 1e15) return "1 quadrilhão";
    if (n === 1e18) return "1 quintilhão";
    return formatNumberSimple(n);
  });

  // --- Simulação 2: Banco de Dados de Notas Fiscais (Novo) ---
  // Fixamos um tamanho de banco de dados empresarial grande: 10 bilhões de notas fiscais
  const invoiceDatabaseExponent = 10; // 10^10 = 10 Bilhões
  const invoiceDatabaseSize = Math.pow(10, invoiceDatabaseExponent);

  // Calcula operações e tempo para a Simulação 2
  const invoiceClassicalOps = useMemo(() => calculateClassicalSearchComplexity(invoiceDatabaseSize), [invoiceDatabaseSize]);
  const invoiceQuantumOps = useMemo(() => calculateGroverComplexity(invoiceDatabaseSize), [invoiceDatabaseSize]);
  const invoiceClassicalTime = useMemo(() => estimateTimeInYears(invoiceClassicalOps), [invoiceClassicalOps]);
  const invoiceQuantumTime = useMemo(() => estimateTimeInYears(invoiceQuantumOps), [invoiceQuantumOps]);

  // Gera dados para o segundo gráfico (foco em N > 10^5)
  const invoiceChartData = useMemo(() => {
    const labels = [];
    const classicalData = [];
    const quantumData = [];
    // Começa em 10^5 e vai até 10^14 para representar o crescimento em bancos de dados corporativos
    for (let i = 5; i <= 14; i++) {
      const N = Math.pow(10, i);
      labels.push(N);
      classicalData.push(calculateClassicalSearchComplexity(N));
      quantumData.push(calculateGroverComplexity(N));
    }

    return { labels, classicalData, quantumData };
  }, []);

  // Labels simplificados para o segundo gráfico
  const simpleInvoiceLabels = invoiceChartData.labels.map((n) => {
    if (n === 1e5) return "100 mil";
    if (n === 1e6) return "1 milhão";
    if (n === 1e9) return "1 bilhão";
    if (n === 1e12) return "1 trilhão";
    if (n === 1e14) return "100 trilhões";
    return formatNumberSimple(n);
  });

  // Encontra o índice correspondente ao tamanho da nota fiscal (10^10 -> índice 5)
  const invoiceCurrentIndex = useMemo(() => {
    return invoiceDatabaseExponent - 5;
  }, [invoiceDatabaseExponent]);


  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 font-inter">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-[#C4A1FF] mb-4">
            Acelerando a Busca de Dados com Computação Quântica
          </h1>
          <p className="text-lg text-gray-300">
            Compare o tempo necessário para encontrar um item específico (um nome, uma fatura) em bancos de dados massivos, usando o algoritmo de Grover (Quântico) contra a busca linear (Clássica).
          </p>
        </div>

        {/* --- Simulação 1: Busca de Nomes (Original Content) --- */}
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b border-purple-500/50 pb-2">
          1. Simulação Interativa: Buscando Nomes em um Banco de Dados Global
        </h2>

        {/* Context Example 1 */}
        <div className="mb-8 p-6 bg-gray-900/80 border border-purple-500/30 shadow-lg rounded-2xl text-white transition-all duration-300 hover:border-purple-500/60 hover:shadow-purple-500/20">
          <h3 className="font-bold text-xl text-[#F5E1FF] mb-2">
            Caso: Encontrar um Nome de Cliente
          </h3>
          <p className="text-gray-300 mb-3">
            Imagine que você precisa encontrar um nome específico em um banco de dados global de clientes.
          </p>
        </div>

        {/* Slider Control 1 */}
        <div className="mb-8 p-6 bg-gray-900/80 border border-purple-500/30 shadow-lg rounded-2xl transition-all duration-300 hover:border-purple-500/60 hover:shadow-purple-500/20">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Quantos nomes no banco de dados? (10^{exponent})
              </label>
              <p className="text-3xl font-bold text-[#C4A1FF] mb-3">
                {formatNumberSimple(databaseSize)} nomes
              </p>
              <input
                type="range"
                min="2"
                max="18"
                step="1"
                value={exponent}
                onChange={(e) => setExponent(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                style={{ WebkitAppearance: 'none', appearance: 'none', height: '8px', borderRadius: '4px' }}
              />
              <div className="flex justify-between text-xs text-white mt-2">
                <span>100 nomes</span>
                <span>1 quintilhão de nomes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content 1 (Chart and Results) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Chart 1 */}
          <div className="lg:col-span-2">
            {/* Altura h-80 para o container */}
            <div className="bg-gray-900/60 border border-purple-500/30 rounded-2xl shadow-lg backdrop-blur-sm p-6 h-126"> 
              <DynamicComplexityChart
                allLabels={simpleLabels}
                allClassicalData={allChartData.classicalData}
                allQuantumData={allChartData.quantumData}
                currentIndex={currentIndex}
                classicalLabel="Computador Normal (O(N))"
                quantumLabel="Computador Quântico (O(√N))"
                xAxisLabel="Quantidade de Nomes (N)"
                yAxisLabel="Verificações Necessárias (Escala Logarítmica)"
                useLogScale={true}
                title="1. Comparação de Complexidade: Busca de Nome"
              />
            </div>
          </div>

          {/* Results Panel 1 */}
          <div className="space-y-4">
            {/* Classical Results */}
            <div className="p-4 bg-gray-900/80 border border-red-500/50 rounded-2xl transition-all duration-300 hover:border-red-500/70 hover:shadow-red-500/20">
              <h3 className="font-bold text-[#E0C3FF] mb-3">💻 Normal (O(N))</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-gray-400 font-semibold">Verificações:</p>
                  <p className="text-white font-mono break-all text-lg">
                    {formatNumberSimple(classicalOps)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold">Tempo Estimado:</p>
                  <p className="text-red-400 font-mono text-lg">
                    {formatTimeSimple(classicalYears)}
                  </p>
                </div>
              </div>
            </div>

            {/* Quantum Results */}
            <div className="p-4 bg-gray-900/60 border border-green-500/50 rounded-2xl transition-all duration-300 hover:border-green-500/70 hover:shadow-green-500/20">
              <h3 className="font-bold text-[#C4A1FF] mb-3">⚡ Quântico (O(√N))</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-gray-400 font-semibold">Verificações:</p>
                  <p className="text-white font-mono break-all text-lg">
                    {formatNumberSimple(quantumOps)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold">Tempo Estimado:</p>
                  <p className="text-green-400 font-mono text-lg">
                    {formatTimeSimple(quantumYears)}
                  </p>
                </div>
              </div>
            </div>

            {/* Speedup */}
            <div className="p-4 bg-gray-900/60 border border-purple-500/30 rounded-2xl transition-all duration-300 hover:border-purple-500/60 hover:shadow-purple-500/20">
              <h3 className="font-bold text-[#F5E1FF] mb-3">🚀 Ganho de Velocidade</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-400 font-semibold">Quântico é:</p>
                <p className="text-[#C4A1FF] font-mono text-xl font-bold">
                  {formatNumberSimple(classicalOps / quantumOps)}x mais rápido!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Simulação 2: Busca de Notas Fiscais (NEW CONTENT) --- */}
        <h2 className="text-3xl font-bold text-white mt-16 mb-6 border-b border-purple-500/50 pb-2">
          2. Estudo de Caso: Encontrar uma Nota Fiscal em um Arquivo Empresarial
        </h2>

        {/* Context Example 2 */}
        <div className="mb-8 p-6 bg-gray-900/80 border border-purple-500/30 shadow-lg rounded-2xl text-white transition-all duration-300 hover:border-purple-500/60 hover:shadow-purple-500/20">
          <h3 className="font-bold text-xl text-[#F5E1FF] mb-2">
            Cenário: Auditoria de 10 Bilhões de Notas
          </h3>
          <p className="text-gray-300 mb-3">
            Uma grande empresa gerou <strong>{formatNumberSimple(invoiceDatabaseSize)} notas fiscais</strong>.
            Uma auditoria precisa encontrar uma nota específica sem ter um índice (busca não estruturada).
          </p>
        </div>

        {/* Second Grid for Invoice Search (Chart and Results) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
           {/* Results Panel 2 (Reversed order to place chart below results on mobile) */}
           <div className="space-y-4 lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-2 lg:hidden">Resultados para {formatNumberSimple(invoiceDatabaseSize)} Notas</h3>
            
            {/* Classical Results 2 - CORRIGIDO O ERRO DE SINTAXE AQUI */}
            <div className="p-4 bg-gray-900/80 border border-red-500/50 rounded-2xl">
              <h4 className="font-bold text-[#E0C3FF] mb-3">💻 Normal (10 Bilhões de Verificações)</h4>
              <p className="text-gray-400 font-semibold">Tempo Estimado:</p>
              <p className="text-red-400 font-mono text-lg font-bold">
                {formatTimeSimple(invoiceClassicalTime)}
              </p>
            </div>

            {/* Quantum Results 2 */}
            <div className="p-4 bg-gray-900/60 border border-green-500/50 rounded-2xl">
              <h4 className="font-bold text-[#C4A1FF] mb-3">⚡ Quântico (100 Mil Verificações)</h4>
              <p className="text-gray-400 font-semibold">Tempo Estimado:</p>
              <p className="text-green-400 font-mono text-lg font-bold">
                {formatTimeSimple(invoiceQuantumTime)}
              </p>
            </div>
            
            {/* Speedup 2 */}
            <div className="p-4 bg-gray-900/60 border border-purple-500/30 rounded-2xl">
              <h4 className="font-bold text-[#F5E1FF] mb-3">💥 Diferença na Prática</h4>
              <p className="text-gray-400 font-semibold">De anos para segundos:</p>
              <p className="text-[#C4A1FF] font-mono text-xl font-bold">
                {formatNumberSimple(invoiceClassicalOps / invoiceQuantumOps)}x mais rápido!
              </p>
            </div>
          </div>
          
          {/* Chart 2 (Below the first chart, placed in the remaining grid space) */}
          <div className="lg:col-span-2">
            {/* Altura h-80 para o container */}
            <div className="bg-gray-900/60 border border-purple-500/30 rounded-2xl shadow-lg backdrop-blur-sm p-6 h-125">
              <DynamicComplexityChart
                allLabels={simpleInvoiceLabels}
                allClassicalData={invoiceChartData.classicalData}
                allQuantumData={invoiceChartData.quantumData}
                currentIndex={invoiceCurrentIndex}
                classicalLabel="Busca Sequencial (O(N))"
                quantumLabel="Algoritmo de Grover (O(√N))"
                xAxisLabel="Quantidade de Notas Fiscais (N)"
                yAxisLabel="Verificações Necessárias (Escala Logarítmica)"
                useLogScale={true}
                title="2. Comparação de Complexidade: Busca de Nota Fiscal"
              />
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="p-6 mt-8 bg-gray-900/60 border border-purple-500/30 shadow-lg rounded-2xl transition-all duration-300 hover:border-purple-500/60 hover:shadow-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">
            A Importância do Quântico em Dados Empresariais
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong>Busca Quântica no Setor Corporativo:</strong> A capacidade de transformar uma busca que levaria anos (como a de uma nota fiscal antiga e não indexada) em algo que leva milissegundos é essencial para auditorias, compliance regulatório e análise forense de grandes volumes de dados.
            </p>
            <p>
              Enquanto o computador clássico precisa de <strong>10.000.000.000</strong> de passos para {formatNumberSimple(invoiceDatabaseSize)} notas, o quântico precisa de apenas cerca de <strong>100.000</strong> passos.
            </p>
            <p className="text-purple-400 font-semibold">
              Isso não significa que o Quântico substitui o banco de dados SQL! A busca clássica em bancos de dados estruturados e indexados (onde o tempo é O(log N)) ainda é muito rápida. O Quântico é um "super-herói" para problemas não estruturados onde a única opção é procurar um por um (O(N)).
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}