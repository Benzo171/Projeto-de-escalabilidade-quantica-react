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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Fatoração RSA: Clássico vs Quântico
          </h1>
          <p className="text-lg text-slate-600">
            Explore como o algoritmo de Shor revoluciona a criptografia ao resolver em tempo polinomial
            o que levaria eras com métodos clássicos.
          </p>
        </div>

        {/* Slider Control */}
        <div className="mb-8 p-6 bg-white shadow-lg rounded-lg">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Tamanho da Chave RSA: <span className="text-blue-600">{bitsL} bits</span>
              </label>
              <input
                type="range"
                min="256"
                max="4096"
                step="256"
                value={bitsL}
                onChange={(e) => setBitsL(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
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
            <div className="bg-white rounded-lg shadow-lg p-6 h-96">
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
            <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg">
              <h3 className="font-bold text-red-900 mb-3">Abordagem Clássica (GNFS)</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-red-700 font-semibold">Operações:</p>
                  <p className="text-red-900 font-mono break-all">
                    {formatScientific(classicalOps)}
                  </p>
                </div>
                <div>
                  <p className="text-red-700 font-semibold">Tempo Estimado:</p>
                  <p className="text-red-900 font-mono">
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
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-3">Abordagem Quântica (Shor)</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-blue-700 font-semibold">Operações:</p>
                  <p className="text-blue-900 font-mono break-all">
                    {formatScientific(quantumOps)}
                  </p>
                </div>
                <div>
                  <p className="text-blue-700 font-semibold">Tempo Estimado:</p>
                  <p className="text-blue-900 font-mono">
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
            <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg">
              <h3 className="font-bold text-green-900 mb-3">Aceleração Quântica</h3>
              <div className="space-y-2 text-sm">
                <p className="text-green-700 font-semibold">Razão de Velocidade:</p>
                <p className="text-green-900 font-mono text-lg">
                  {formatScientific(classicalOps / quantumOps)}x mais rápido
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Entendendo a Fatoração RSA</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              <strong>GNFS (General Number Field Sieve):</strong> O algoritmo clássico mais eficiente
              conhecido para fatoração. Sua complexidade é subexponencial em relação ao número de bits
              da chave, tornando-a impraticável para chaves grandes (RSA-2048, RSA-4096).
            </p>
            <p>
              <strong>Algoritmo de Shor:</strong> Um algoritmo quântico que resolve fatoração em tempo
              polinomial. Isso significa que um computador quântico suficientemente potente poderia
              quebrar a criptografia RSA em minutos, em vez de milhões de anos.
            </p>
            <p>
              <strong>Implicação:</strong> A segurança da internet moderna depende da dificuldade
              computacional de fatorar números grandes. O desenvolvimento de computadores quânticos
              práticos tornaria a criptografia RSA obsoleta, motivando a pesquisa em criptografia
              pós-quântica.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
