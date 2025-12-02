import { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Importando Link
import DynamicComplexityChart from '../components/common/DynamicComplexityChart';
import {
  calculateGNFSComplexity,
  calculateShorComplexity,
  formatScientific,
  estimateTimeInYears,
} from '../util/complexityCalculations';

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

export default function RSAFactorization() {
  const [bitsL, setBitsL] = useState(2048);
  const navigate = useNavigate();

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

  const currentIndex = useMemo(() => {
    return allChartData.labels.findIndex((label) => label === bitsL);
  }, [bitsL, allChartData.labels]);

  const classicalOps = useMemo(() => calculateGNFSComplexity(bitsL), [bitsL]);
  const quantumOps = useMemo(() => calculateShorComplexity(bitsL), [bitsL]);
  const classicalYears = useMemo(() => estimateTimeInYears(classicalOps), [classicalOps]);
  const quantumYears = useMemo(() => estimateTimeInYears(quantumOps), [quantumOps]);

  const cardStyle = "p-4 bg-gray-900/70 backdrop-blur-sm border border-purple-500/30 rounded-2xl shadow-lg transition-all duration-300 hover:border-purple-500/60 hover:shadow-purple-500/20";

  const handleBackToCategories = () => {
    navigate('/'); 
    setTimeout(() => {
        const section = document.getElementById('categories-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Quebrando Senhas de Internet
          </h1>
          <p className="text-lg text-slate-300">
            Veja como um computador quântico pode quebrar a segurança da internet muito mais rápido
            do que um computador normal.
          </p>
        </div>

        {/* Context Example */}
        <div className="mb-8 bg-transparent rounded-2xl p-8 border border-purple-500/30 transition-all duration-300 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20">
          <h3 className="font-bold text-[#601EF9] text-xl mb-2">🔐 O que é RSA?</h3>
          <p className="text-slate-200 mb-3">
            RSA é o sistema que protege suas senhas, dados bancários e mensagens na internet.
          </p>
          <p className="text-slate-300">
            <strong className="text-[#C4A1FF]">Computador normal:</strong> Levaria bilhões de anos para quebrar uma chave RSA.
          </p>
          <p className="text-slate-300 mt-1">
            <strong className="text-[#E0C3FF]">Computador quântico:</strong> Poderia quebrar em minutos!
          </p>
        </div>

        {/* Slider Control */}
        <div className="mb-8 p-6 bg-gray-900/70 rounded-2xl border border-purple-500/30 backdrop-blur-md transition-all duration-300 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Tamanho da Chave de Segurança: <span className="text-[#601EF9] text-lg">{bitsL} bits</span>
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
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>256 bits (fraca)</span>
                <span>4096 bits (muito forte)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-900/60 border  border-purple-500/30 rounded-2xl shadow-lg p- h-140.5 pt-15 backdrop-blur-sm">
              <DynamicComplexityChart
                allLabels={allChartData.labels.map((l) => `${l}b`)}
                allClassicalData={allChartData.classicalData}
                allQuantumData={allChartData.quantumData}
                currentIndex={currentIndex}
                classicalLabel="Computador Normal"
                quantumLabel="Computador Quântico"
                xAxisLabel="Tamanho da Chave"
                yAxisLabel="Tentativas Necessárias"
                useLogScale={false}
                title="Tempo para Quebrar uma Senha RSA"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className={cardStyle}>
              <h3 className="font-bold text-[#E0C3FF] mb-3 border-b border-purple-500/40 pb-2">💻 Computador Normal</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-slate-300 font-semibold">Tentativas:</p>
                  <p className="text-white font-mono break-all text-xs">
                    {formatScientific(classicalOps)}
                  </p>
                </div>
                <div>
                  <p className="text-slate-300 font-semibold">Tempo para quebrar:</p>
                  <p className="text-red-200 font-mono text-lg font-bold">
                    {formatTimeSimple(classicalYears)}
                  </p>
                </div>
              </div>
            </div>

            <div className={cardStyle}>
              <h3 className="font-bold text-[#C4A1FF] mb-3 border-b border-purple-500/40 pb-2">⚡ Computador Quântico</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-slate-300 font-semibold">Tentativas:</p>
                  <p className="text-white font-mono break-all text-xs">
                    {formatScientific(quantumOps)}
                  </p>
                </div>
                <div>
                  <p className="text-slate-300 font-semibold">Tempo para quebrar:</p>
                  <p className="text-blue-200 font-mono text-lg font-bold">
                    {quantumYears < 0.001
                      ? `${(quantumYears * 1e6).toFixed(2)} microsegundos`
                      : quantumYears < 1
                        ? `${(quantumYears * 1000).toFixed(2)} milissegundos`
                        : `${quantumYears.toFixed(2)} segundos`}
                  </p>
                </div>
              </div>
            </div>

            <div className={cardStyle}>
              <h3 className="font-bold text-[#F5E1FF] mb-3 border-b border-purple-500/40 pb-2">🚀 Quanto Mais Rápido?</h3>
              <div className="space-y-2 text-sm">
                <p className="text-slate-300 font-semibold">Velocidade:</p>
                <p className="text-[#C4A1FF] font-mono text-xl font-bold">
                  {formatScientific(classicalOps / quantumOps)}x
                </p>
                <p className="text-slate-400 text-xs mt-2 italic">
                  O quântico é essa quantidade de vezes mais rápido!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="p-6 bg-transparent border border-purple-500/30 shadow-lg rounded-2xl text-slate-200 transition-all duration-300 hover:border-purple-500/60 hover:shadow-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">
            Por que o Computador Quântico é Tão Mais Rápido?
          </h2>
          <div className="space-y-4">
            <p>
              <strong className="text-[#601EF9]">Computador Normal:</strong> Tenta quebrar a senha testando uma combinação por vez.
            </p>
            <p>
              <strong className="text-[#601EF9]">Computador Quântico:</strong> Usa um truque especial chamado "Algoritmo de Shor".
            </p>
          </div>
        </div>

        {/* --- NAVEGAÇÃO ENTRE OS EXEMPLOS (NOVA GRADE) --- */}
        <div className="mt-20 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-purple-200">
                Continue Explorando Outros Exemplos 🚀
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Botão 1: RSA (Ativo) */}
                <div className="p-5 rounded-xl border border-purple-500 bg-purple-900/30 cursor-default">
                    <h4 className="font-bold text-lg mb-2 text-white">🔐 Quebrando Senhas (RSA)</h4>
                    <p className="text-sm text-gray-300">Você está explorando este exemplo agora.</p>
                </div>

                {/* Botão 2: TSP */}
                <Link to="/roteamento-aereo" className="p-5 rounded-xl border bg-gray-900/40 border-gray-700 hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-300 group">
                    <h4 className="font-bold text-lg mb-2 text-purple-300 group-hover:text-purple-200">✈️ Roteamento (TSP)</h4>
                    <p className="text-sm text-gray-400">O problema do caixeiro viajante e a otimização logística de rotas.</p>
                </Link>

                {/* Botão 3: Database */}
                <Link to="/database-search" className="p-5 rounded-xl border bg-gray-900/40 border-gray-700 hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-300 group">
                    <h4 className="font-bold text-lg mb-2 text-purple-300 group-hover:text-purple-200">🔍 Busca em Dados</h4>
                    <p className="text-sm text-gray-400">O algoritmo de Grover encontrando agulhas no palheiro.</p>
                </Link>
            </div>
        </div>

        {/* --- BOTÃO VOLTAR PARA O MENU --- */}
        <div className="mt-12 grid grid-cols-1 mb-20">
            <div className="max-w-xs mx-auto w-full"> 
                <button
                    onClick={handleBackToCategories}
                    className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-gray-800/80 border border-purple-500/50 rounded-xl text-white font-bold hover:bg-purple-900/40 hover:border-purple-400 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
                >
                    <span className="text-xl">←</span>
                    Voltar para o Menu Principal
                </button>
            </div>
        </div>

      </div>
    </div>
  );
}