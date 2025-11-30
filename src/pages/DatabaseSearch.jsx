import { useState, useMemo } from 'react';
import DynamicComplexityChart from '../components/common/DynamicComplexityChart';
import {
  calculateClassicalSearchComplexity,
  calculateGroverComplexity,
  formatScientific,
  estimateTimeInYears,
} from '../util/complexityCalculations';

export default function DatabaseSearch() {
  const [exponent, setExponent] = useState(12);
  const databaseSize = Math.pow(10, exponent);
  const [useLogScale, setUseLogScale] = useState(true);

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
    return exponent - 2; // Começa em 10^2, então índice = exponent - 2
  }, [exponent]);

  // Calcula valores para o slider atual
  const classicalOps = useMemo(() => calculateClassicalSearchComplexity(databaseSize), [databaseSize]);
  const quantumOps = useMemo(() => calculateGroverComplexity(databaseSize), [databaseSize]);
  const classicalYears = useMemo(() => estimateTimeInYears(classicalOps), [classicalOps]);
  const quantumYears = useMemo(() => estimateTimeInYears(quantumOps), [quantumOps]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Busca em Banco de Dados
          </h1>
          <p className="text-lg text-slate-600">
            Descubra como o algoritmo de Grover oferece uma aceleração quadrática em buscas
            não estruturadas, mesmo em bancos de dados gigantescos.
          </p>
        </div>

        {/* Slider Control */}
        <div className="mb-8 p-6 bg-white shadow-lg rounded-lg">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Tamanho do Banco de Dados: <span className="text-blue-600">10^{exponent}</span> itens
              </label>
              <input
                type="range"
                min="2"
                max="18"
                step="1"
                value={exponent}
                onChange={(e) => setExponent(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>10² (100)</span>
                <span>10^18 (1 Exabyte)</span>
              </div>
            </div>

            {/* Scale Toggle */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={useLogScale}
                  onChange={(e) => setUseLogScale(e.target.checked)}
                  className="w-4 h-4 rounded accent-blue-600"
                />
                <span className="text-sm font-medium text-slate-700">Usar escala logarítmica</span>
              </label>
              <p className="text-xs text-slate-500 ml-auto">
                (Recomendado para visualizar a diferença)
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Chart */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 h-96">
              <DynamicComplexityChart
                allLabels={allChartData.labels.map((n) => {
                  const exp = Math.log10(n);
                  return `10^${exp.toFixed(0)}`;
                })}
                allClassicalData={allChartData.classicalData}
                allQuantumData={allChartData.quantumData}
                currentIndex={currentIndex}
                classicalLabel="Busca Linear (Clássico)"
                quantumLabel="Grover (Quântico)"
                xAxisLabel="Tamanho do Banco de Dados"
                yAxisLabel={useLogScale ? "Operações (log scale)" : "Operações"}
                useLogScale={useLogScale}
                title="Complexidade de Busca em Banco de Dados"
              />
            </div>
          </div>

          {/* Results Panel */}
          <div className="space-y-4">
            {/* Classical Results */}
            <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg">
              <h3 className="font-bold text-red-900 mb-3">Busca Linear (Clássico)</h3>
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
                    {classicalYears > 1e6
                      ? `${(classicalYears / 1e6).toFixed(2)}M anos`
                      : classicalYears > 1
                        ? `${classicalYears.toFixed(2)} anos`
                        : `${(classicalYears * 365.25).toFixed(2)} dias`}
                  </p>
                </div>
              </div>
            </div>

            {/* Quantum Results */}
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-3">Grover (Quântico)</h3>
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
                      ? `${(quantumYears * 1e9).toFixed(2)}ns`
                      : quantumYears < 1
                        ? `${(quantumYears * 1e6).toFixed(2)}µs`
                        : `${quantumYears.toFixed(2)}s`}
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
                <p className="text-green-700 text-xs mt-2">
                  (Aceleração quadrática: √N)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Entendendo a Busca com Grover
          </h2>
          <div className="space-y-4 text-slate-700">
            <p>
              <strong>Busca Linear (Clássico):</strong> Para encontrar um item específico em um banco
              de dados não ordenado, você precisa verificar cada item um por um. No pior caso, isso
              requer N operações para um banco com N itens.
            </p>
            <p>
              <strong>Algoritmo de Grover:</strong> Um algoritmo quântico que explora a
              superposição e interferência quântica para buscar em tempo O(√N). Isso oferece uma
              aceleração quadrática em relação aos métodos clássicos.
            </p>
            <p>
              <strong>Aplicações Práticas:</strong> Busca em bancos de dados, quebra de hashes,
              otimização combinatória. Mesmo com a aceleração quadrática, ainda é menos dramático
              que o algoritmo de Shor, mas oferece melhorias significativas em problemas de busca.
            </p>
            <p>
              <strong>Nota:</strong> Use a escala logarítmica para visualizar melhor a diferença
              entre as duas abordagens em bancos de dados muito grandes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}