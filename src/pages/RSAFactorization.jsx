import { useState, useMemo } from 'react';
import DynamicComplexityChart from '../components/common/DynamicComplexityChart';
import {
  calculateGNFSComplexity,
  calculateShorComplexity,
  formatScientific,
  estimateTimeInYears,
} from '../util/complexityCalculations';

export default function RSAFactorization() {
  const [bitsL, setBitsL] = useState(2048);

  // Gera todos os dados possíveis
  const allChartData = useMemo(() => {
    const labels = [];
    const classicalData = [];
    const quantumData = [];

    for (let L = 256; L <= 4096; L += 256) {
      labels.push(L);
      classicalData.push(calculateGNFSComplexity(L));
      quantumData.push(calculateShorComplexity(L));
    }

    return { labels, classicalData, quantumData };
  }, []);

  // Encontra o índice correspondente ao valor atual do slider
  const currentIndex = useMemo(() => {
    return allChartData.labels.findIndex((label) => label === bitsL);
  }, [bitsL, allChartData.labels]);

  // Calcula valores para o slider atual
  const classicalOps = useMemo(() => calculateGNFSComplexity(bitsL), [bitsL]);
  const quantumOps = useMemo(() => calculateShorComplexity(bitsL), [bitsL]);
  const classicalYears = useMemo(() => estimateTimeInYears(classicalOps), [classicalOps]);
  const quantumYears = useMemo(() => estimateTimeInYears(quantumOps), [quantumOps]);

  // Estilo comum para os cards de resultado (Fundo cinza-azulado transparente + Borda 3px Roxa)
  const cardStyle = "p-4 bg-slate-900/60 backdrop-blur-sm border-[1px] border-[#601EF9] rounded-lg shadow-lg";

  return (
    <div className="min-h-screen bg- py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-white">
            Fatoração RSA:
          </h1>
          <p className="text-lg text-slate-300">
            Explore como o algoritmo de Shor revoluciona a criptografia ao resolver em tempo polinomial
            o que levaria eras com métodos clássicos.
          </p>
        </div>

        {/* Slider Control */}
        <div className="mb-8 p-6 bg-slate-900/80 border-[#601EF9] rounded-lg border-[2px] backdrop-blur-md">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Tamanho da Chave RSA: <span className="text-[#601EF9] font-bold">{bitsL} bits</span>
              </label>
              <input
                type="range"
                min="256"
                max="4096"
                step="256"
                value={bitsL}
                onChange={(e) => setBitsL(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#601EF9]"
              />
              <div className="flex text-white justify-between text-xs text-slate-400 mt-2">
                <span>256 bits</span>
                <span>4096 bits</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Chart */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900/40 border-[2px] border-[#601EF9] rounded-lg shadow-lg p- h-125.5 backdrop-blur-sm">
              <DynamicComplexityChart
                allLabels={allChartData.labels.map((l) => `${l}b`)}
                allClassicalData={allChartData.classicalData}
                allQuantumData={allChartData.quantumData}
                currentIndex={currentIndex}
                classicalLabel="GNFS (Clássico)"
                quantumLabel="Shor (Quântico)"
                xAxisLabel="Tamanho da Chave (bits)"
                yAxisLabel="Operações (log scale)"
                useLogScale={true}
                title="Complexidade de Fatoração RSA"
              />
            </div>
          </div>

          {/* Results Panel */}
          <div className="space-y-4">
            
            {/* Classical Results */}
            <div className={cardStyle}>
              <h3 className="font-bold text-red-300 mb-3 border-b border-red-500/30 pb-2">Abordagem Clássica (GNFS)</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-slate-300 font-semibold">Operações:</p>
                  <p className="text-white font-mono break-all text-xs sm:text-sm">
                    {formatScientific(classicalOps)}
                  </p>
                </div>
                <div>
                  <p className="text-slate-300 font-semibold">Tempo Estimado:</p>
                  <p className="text-red-200 font-mono">
                    {classicalYears > 1e9
                      ? `${(classicalYears / 1e9).toFixed(2)} bilhões de anos`
                      : classicalYears > 1e6
                        ? `${(classicalYears / 1e6).toFixed(2)} milhões de anos`
                        : `${classicalYears.toFixed(2)} anos`}
                  </p>
                </div>
              </div>
            </div>

            {/* Quantum Results */}
            <div className={cardStyle}>
              <h3 className="font-bold text-blue-300 mb-3 border-b border-blue-500/30 pb-2">Abordagem Quântica (Shor)</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-slate-300 font-semibold">Operações:</p>
                  <p className="text-white font-mono break-all text-xs sm:text-sm">
                    {formatScientific(quantumOps)}
                  </p>
                </div>
                <div>
                  <p className="text-slate-300 font-semibold">Tempo Estimado:</p>
                  <p className="text-blue-200 font-mono">
                    {quantumYears < 0.001
                      ? `${(quantumYears * 1e6).toFixed(2)} microsegundos`
                      : quantumYears < 1
                        ? `${(quantumYears * 1000).toFixed(2)} milissegundos`
                        : `${quantumYears.toFixed(2)} segundos`}
                  </p>
                </div>
              </div>
            </div>

            {/* Speedup */}
            <div className={cardStyle}>
              <h3 className="font-bold text-green-300 mb-3 border-b border-green-500/30 pb-2">Aceleração Quântica</h3>
              <div className="space-y-2 text-sm">
                <p className="text-slate-300 font-semibold">Razão de Velocidade:</p>
                <p className="text-green-400 font-mono text-lg font-bold">
                  {formatScientific(classicalOps / quantumOps)}x mais rápido
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="p-6 bg-slate-900/80 border-[2px] border-[#601EF9] shadow-lg rounded-lg text-slate-200">
          <h2 className="text-2xl font-bold text-white mb-4">Entendendo a Fatoração RSA</h2>
          <div className="space-y-4">
            <p>
              <strong className="text-[#601EF9]">GNFS (General Number Field Sieve):</strong> O algoritmo clássico mais eficiente
              conhecido para fatoração. Sua complexidade é subexponencial em relação ao número de bits
              da chave, tornando-a impraticável para chaves grandes (RSA-2048, RSA-4096).
            </p>
            <p>
              <strong className="text-[#601EF9]">Algoritmo de Shor:</strong> Um algoritmo quântico que resolve fatoração em tempo
              polinomial. Isso significa que um computador quântico suficientemente potente poderia
              quebrar a criptografia RSA em minutos, em vez de milhões de anos.
            </p>
            <p>
              <strong className="text-[#601EF9]">Implicação:</strong> A segurança da internet moderna depende da dificuldade
              computacional de fatorar números grandes. O desenvolvimento de computadores quânticos
              práticos tornaria a criptografia RSA obsoleta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}