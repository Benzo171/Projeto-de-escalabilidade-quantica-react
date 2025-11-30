import { useState, useMemo } from 'react';
import DynamicComplexityChart from '../components/common/DynamicComplexityChart';
import {
  calculateClassicalSearchComplexity,
  calculateGroverComplexity,
  formatScientific,
  estimateTimeInYears,
} from '../util/complexityCalculations';

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
  
  return `${(ms * 1000).toFixed(1)} microsegundos`;
}

export default function DatabaseSearch() {
  const [exponent, setExponent] = useState(12);
  const databaseSize = Math.pow(10, exponent);

  // Gera todos os dados possíveis
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

  // Calcula valores para o slider atual
  const classicalOps = useMemo(() => calculateClassicalSearchComplexity(databaseSize), [databaseSize]);
  const quantumOps = useMemo(() => calculateGroverComplexity(databaseSize), [databaseSize]);
  const classicalYears = useMemo(() => estimateTimeInYears(classicalOps), [classicalOps]);
  const quantumYears = useMemo(() => estimateTimeInYears(quantumOps), [quantumOps]);

  // Labels simplificados para o gráfico
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

  return (
    <div className="min-h-screen bg- from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Procurando um Nome em um Banco de Dados Gigante
          </h1>
          <p className="text-lg text-white">
            Imagine que você precisa encontrar uma pessoa específica em um banco de dados enorme.
            Veja como um computador quântico pode fazer isso muito mais rápido que um computador normal.
          </p>
        </div>

        {/* Context Example */}
        <div className="mb-8 p-6 p-6 bg-slate-900/80 border-[2px] border-[#601EF9] shadow-lg rounded-lg text-white">
          <h3 className="font-bold text- mb-2">📱 Exemplo do Dia a Dia:</h3>
          <p className="text- mb-3">
            Você tem um banco de dados com <strong>1 trilhão de nomes</strong> de clientes (sem organização).
            Precisa encontrar "Maria Silva". 
          </p>
          <p className="text-white">
            <strong>Computador normal:</strong> Verifica cada nome um por um. Pode levar bilhões de anos! 😱
          </p>
          <p className="text-white mt-2">
            <strong>Computador quântico:</strong> Usa um truque especial para encontrar muito mais rápido. Em segundos! ⚡
          </p>
        </div>

        {/* Slider Control */}
        <div className="mb-8 p-6 bg-slate-900/80 border-[2px] border-[#601EF9] shadow-lg rounded-lg">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Quantos nomes no banco de dados?
              </label>
              <p className="text-2xl font-bold text-blue-600 mb-3">
                {formatNumberSimple(databaseSize)} nomes
              </p>
              <input
                type="range"
                min="2"
                max="18"
                step="1"
                value={exponent}
                onChange={(e) => setExponent(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-white mt-2">
                <span>100 nomes</span>
                <span>1 quintilhão de nomes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Chart */}
          <div className="lg:col-span-2 ">
            <div className="bg-slate-900/40 border-[2px] border-[#601EF9] rounded-lg shadow-lg p- h-125.5 backdrop-blur-sm rounded-lg shadow-lg p-6 h-96">
              <DynamicComplexityChart
                allLabels={simpleLabels}
                allClassicalData={allChartData.classicalData}
                allQuantumData={allChartData.quantumData}
                currentIndex={currentIndex}
                classicalLabel="Computador Normal"
                quantumLabel="Computador Quântico"
                xAxisLabel="Quantidade de Nomes"
                yAxisLabel="Verificações Necessárias"
                useLogScale={false}
                title="Tempo para Encontrar um Nome"
              />
            </div>
          </div>

          {/* Results Panel */}
          <div className="space-y-4">
            {/* Classical Results */}
            <div className="p-4 bg-slate-900/80 border-[2px] border-[#601EF9] rounded-lg">
              <h3 className="font-bold text-white mb-3">💻 Computador Normal</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-white font-bold">Verificações:</p>
                  <p className="text-white font-mono break-all">
                    {formatNumberSimple(classicalOps)}
                  </p>
                </div>
                <div>
                  <p className="text-white font-bold">Tempo para encontrar:</p>
                  <p className="text-white font-mono">
                    {formatTimeSimple(classicalYears)}
                  </p>
                </div>
              </div>
            </div>

            {/* Quantum Results */}
            <div className="p-4 bg-slate-900/40 border-[2px] border-[#601EF9] rounded-lg">
              <h3 className="font-bold text-white mb-3">⚡ Computador Quântico</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-white font-semibold">Verificações:</p>
                  <p className="text-white font-mono break-all">
                    {formatNumberSimple(quantumOps)}
                  </p>
                </div>
                <div>
                  <p className="text-white font-semibold">Tempo para encontrar:</p>
                  <p className="text-white font-mono">
                    {formatTimeSimple(quantumYears)}
                  </p>
                </div>
              </div>
            </div>

            {/* Speedup */}
            <div className="p-4 bg-slate-900/40 border-[2px] border-[#601EF9] rounded-lg">
              <h3 className="font-bold text-[#008000] mb-3">🚀 Quanto Mais Rápido?</h3>
              <div className="space-y-2 text-sm">
                <p className="text-[#008000] font-semibold">Velocidade:</p>
                <p className="text-[#008000] font-mono text-lg">
                  {formatNumberSimple(classicalOps / quantumOps)}x
                </p>
                <p className="text-[#008000] text-xs mt-2">
                  O quântico é essa quantidade de vezes mais rápido!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="p-6 bg-slate-900/40 border-[2px] border-[#601EF9] shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">
            Por que o Computador Quântico é Tão Mais Rápido?
          </h2>
          <div className="space-y-4 text-white">
            <p>
              <strong>Computador Normal:</strong> Procura verificando cada nome, um por um.
              Se tem 1 bilhão de nomes, pode precisar verificar até 1 bilhão de vezes. Muito lento!
            </p>
            <p>
              <strong>Computador Quântico:</strong> Usa um truque especial da física quântica.
              Em vez de verificar um por um, ele verifica vários ao mesmo tempo (superposição).
              Para 1 bilhão de nomes, precisa de apenas ~31.622 verificações. Incrível!
            </p>
            <p>
              <strong>Onde isso é útil?</strong> Em bancos de dados de clientes, registros médicos,
              listas de pessoas desaparecidas, ou qualquer lugar onde você precisa encontrar alguém rapidamente.
            </p>
            <p>
              <strong>Por que "sem organização"?</strong> Se o banco tivesse um índice (como um índice de livro),
              seria rápido mesmo no computador normal. Mas aqui não tem índice, então tem que verificar tudo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}