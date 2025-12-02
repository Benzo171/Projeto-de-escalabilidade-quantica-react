import { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Adicionei Link
import DynamicComplexityChart from '../components/common/DynamicComplexityChart';
import {
  calculateClassicalSearchComplexity,
  calculateGroverComplexity,
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
  const navigate = useNavigate();

  // --- ESTADO DA SEÇÃO 1 (Slider) ---
  const [exponent, setExponent] = useState(12);
  const databaseSize = Math.pow(10, exponent);

  // --- DADOS GERAIS ---
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

  const simpleLabels = useMemo(() => allChartData.labels.map((n) => {
    if (n === 100) return "100";
    if (n === 1000) return "1 mil";
    if (n === 1e6) return "1 milhão";
    if (n === 1e9) return "1 bilhão";
    if (n === 1e12) return "1 trilhão";
    if (n === 1e15) return "1 quadrilhão";
    if (n === 1e18) return "1 quintilhão";
    return formatNumberSimple(n);
  }), [allChartData]);

  const currentIndex = useMemo(() => {
    return exponent - 2;
  }, [exponent]);

  const classicalOps = useMemo(() => calculateClassicalSearchComplexity(databaseSize), [databaseSize]);
  const quantumOps = useMemo(() => calculateGroverComplexity(databaseSize), [databaseSize]);
  const classicalYears = useMemo(() => estimateTimeInYears(classicalOps), [classicalOps]);
  const quantumYears = useMemo(() => estimateTimeInYears(quantumOps), [quantumOps]);

  // --- CÁLCULOS DA SEÇÃO 2 ---
  const invoiceExponent = 10;
  const invoiceDatabaseSize = Math.pow(10, invoiceExponent);
  const invoiceCurrentIndex = invoiceExponent - 2;

  const invoiceClassicalOps = calculateClassicalSearchComplexity(invoiceDatabaseSize);
  const invoiceQuantumOps = calculateGroverComplexity(invoiceDatabaseSize);
  
  const invoiceClassicalTime = estimateTimeInYears(invoiceClassicalOps);
  const invoiceQuantumTime = estimateTimeInYears(invoiceQuantumOps);

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
            Procurando um Nome em um Banco de Dados Gigante
          </h1>
          <p className="text-lg text-gray-300">
            Imagine que você precisa encontrar uma pessoa específica em um banco de dados enorme.
            Veja como um computador quântico pode fazer isso muito mais rápido que um computador normal.
          </p>
        </div>

        {/* ... (CONTEÚDO EXISTENTE DO GRÁFICO E SLIDER - MANTIDO) ... */}
        {/* Para economizar espaço visual aqui, mantive o core lógico inalterado acima e vou focar na estrutura abaixo */}
        
        <div className="mb-8 p-6 bg-gray-900/80 border border-purple-500/30 shadow-lg rounded-2xl text-white transition-all duration-300 hover:border-purple-500/60 hover:shadow-purple-500/20">
          <h3 className="font-bold text-xl mb-2">📱 Exemplo do Dia a Dia:</h3>
          <p className="text-gray-300 mb-3">
            Você tem um banco de dados com <strong>1 trilhão de nomes</strong> de clientes (sem organização).
            Precisa encontrar "Maria Silva". 
          </p>
          <p className="text-gray-300">
            <strong>Computador normal:</strong> Verifica cada nome um por um. Pode levar bilhões de anos! 😱
          </p>
          <p className="text-gray-300 mt-2">
            <strong>Computador quântico:</strong> Usa um truque especial para encontrar muito mais rápido. Em segundos! ⚡
          </p>
        </div>

        <div className="mb-8 p-6 bg-gray-900/80 border border-purple-500/30 shadow-lg rounded-2xl transition-all duration-300 hover:border-purple-500/60 hover:shadow-purple-500/20">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Quantos nomes no banco de dados?
              </label>
              <p className="text-2xl font-bold text-[#C4A1FF] mb-3">
                {formatNumberSimple(databaseSize)} nomes
              </p>
              <input
                type="range"
                min="2"
                max="18"
                step="1"
                value={exponent}
                onChange={(e) => setExponent(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>100 nomes</span>
                <span>1 quintilhão de nomes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-900/60 border border-purple-500/30 rounded-2xl shadow-lg backdrop-blur-sm p-6 h-96">
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

          <div className="space-y-4">
            <div className="p-4 bg-gray-900/80 border border-purple-500/30 rounded-2xl transition-all duration-300 hover:border-purple-500/60 hover:shadow-purple-500/20">
              <h3 className="font-bold text-[#E0C3FF] mb-3">💻 Computador Normal</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-gray-400 font-bold">Verificações:</p>
                  <p className="text-white font-mono break-all">
                    {formatNumberSimple(classicalOps)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 font-bold">Tempo para encontrar:</p>
                  <p className="text-white font-mono">
                    {formatTimeSimple(classicalYears)}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-900/60 border border-purple-500/30 rounded-2xl transition-all duration-300 hover:border-purple-500/60 hover:shadow-purple-500/20">
              <h3 className="font-bold text-[#C4A1FF] mb-3">⚡ Computador Quântico</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-gray-400 font-semibold">Verificações:</p>
                  <p className="text-white font-mono break-all">
                    {formatNumberSimple(quantumOps)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold">Tempo para encontrar:</p>
                  <p className="text-white font-mono">
                    {formatTimeSimple(quantumYears)}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-900/60 border border-purple-500/30 rounded-2xl transition-all duration-300 hover:border-purple-500/60 hover:shadow-purple-500/20">
              <h3 className="font-bold text-[#F5E1FF] mb-3">🚀 Quanto Mais Rápido?</h3>
              <div className="space-y-2 text-sm">
                <p className="text-[#C4A1FF] font-semibold">Velocidade:</p>
                <p className="text-[#C4A1FF] font-mono text-lg">
                  {formatNumberSimple(classicalOps / quantumOps)}x
                </p>
                <p className="text-green-400 text-xs mt-2">
                  O quântico é essa quantidade de vezes mais rápido!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-transparent border border-purple-500/30 shadow-lg rounded-2xl transition-all duration-300 hover:border-purple-500/60 hover:shadow-purple-500/20 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">
            Por que o Computador Quântico é Tão Mais Rápido?
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong>Computador Normal:</strong> Procura verificando cada nome, um por um.
              Se tem 1 bilhão de nomes, pode precisar verificar até 1 bilhão de vezes. Muito lento!
            </p>
            <p>
              <strong>Computador Quântico:</strong> Usa um truque especial da física quântica.
              Em vez de verificar um por um, ele verifica vários ao mesmo tempo (superposição).
              Para 1 bilhão de nomes, precisa de apenas ~31.622 verificações. Incrível!
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 border-b border-purple-500/50 pb-2">
          2. Estudo de Caso: Encontrar uma Nota Fiscal
        </h2>

        <div className="mb-8 p-6 bg-gray-900/80 border border-purple-500/30 shadow-lg rounded-2xl text-white transition-all duration-300 hover:border-purple-500/60 hover:shadow-purple-500/20">
          <h3 className="font-bold text-xl text-[#F5E1FF] mb-2">
            Cenário: Auditoria de 10 Bilhões de Notas
          </h3>
          <p className="text-gray-300 mb-3">
            Uma grande empresa gerou <strong>{formatNumberSimple(invoiceDatabaseSize)} notas fiscais</strong>.
            Uma auditoria precisa encontrar uma nota específica sem ter um índice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
           <div className="space-y-4 lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-2 lg:hidden">Resultados</h3>
            
            <div className="p-4 bg-gray-900/80 border border-red-500/50 rounded-2xl">
              <h4 className="font-bold text-[#E0C3FF] mb-3">💻 Normal</h4>
              <p className="text-gray-400 font-semibold text-xs">Tempo Estimado:</p>
              <p className="text-red-400 font-mono text-lg font-bold">
                {formatTimeSimple(invoiceClassicalTime)}
              </p>
            </div>

            <div className="p-4 bg-gray-900/60 border border-green-500/50 rounded-2xl">
              <h4 className="font-bold text-[#C4A1FF] mb-3">⚡ Quântico</h4>
              <p className="text-gray-400 font-semibold text-xs">Tempo Estimado:</p>
              <p className="text-green-400 font-mono text-lg font-bold">
                {formatTimeSimple(invoiceQuantumTime)}
              </p>
            </div>
            
            <div className="p-4 bg-gray-900/60 border border-purple-500/30 rounded-2xl">
              <h4 className="font-bold text-[#F5E1FF] mb-3">💥 Ganho</h4>
              <p className="text-[#C4A1FF] font-mono text-xl font-bold">
                {formatNumberSimple(invoiceClassicalOps / invoiceQuantumOps)}x
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-gray-900/60 border border-purple-500/30 rounded-2xl shadow-lg backdrop-blur-sm p-6 h-[500px]">
              <DynamicComplexityChart
                allLabels={simpleLabels}
                allClassicalData={allChartData.classicalData}
                allQuantumData={allChartData.quantumData}
                currentIndex={invoiceCurrentIndex}
                classicalLabel="Busca Sequencial"
                quantumLabel="Algoritmo de Grover"
                xAxisLabel="Quantidade de Notas"
                yAxisLabel="Verificações"
                useLogScale={true}
                title="Comparação: Busca de Nota Fiscal"
              />
            </div>
          </div>
        </div>

        <div className="p-6 mt-8 bg-gray-900/60 border border-purple-500/30 shadow-lg rounded-2xl transition-all duration-300 hover:border-purple-500/60 hover:shadow-purple-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            A Importância do Quântico em Dados Empresariais
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong>Busca Quântica no Setor Corporativo:</strong> A capacidade de transformar uma busca que levaria anos em algo que leva milissegundos é essencial para auditorias e compliance.
            </p>
          </div>
        </div>

        {/* --- NAVEGAÇÃO ENTRE OS EXEMPLOS (NOVA GRADE) --- */}
        <div className="mt-20 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-purple-200">
                Continue Explorando Outros Exemplos 🚀
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Botão 1: RSA */}
                <Link to="/rsa" className="p-5 rounded-xl border bg-gray-900/40 border-gray-700 hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-300 group">
                    <h4 className="font-bold text-lg mb-2 text-purple-300 group-hover:text-purple-200">🔐 Quebrando Senhas (RSA)</h4>
                    <p className="text-sm text-gray-400">Entenda como computadores quânticos fatoram números gigantes e ameaçam a criptografia.</p>
                </Link>

                {/* Botão 2: TSP (Routing) */}
                <Link to="/roteamento-aereo" className="p-5 rounded-xl border bg-gray-900/40 border-gray-700 hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-300 group">
                    <h4 className="font-bold text-lg mb-2 text-purple-300 group-hover:text-purple-200">✈️ Roteamento (TSP)</h4>
                    <p className="text-sm text-gray-400">O problema do caixeiro viajante e a otimização logística de rotas.</p>
                </Link>

                {/* Botão 3: Database (Ativo/Desabilitado visualmente ou link normal) */}
                <div className="p-5 rounded-xl border border-purple-500 bg-purple-900/30 cursor-default">
                    <h4 className="font-bold text-lg mb-2 text-white">🔍 Busca em Dados</h4>
                    <p className="text-sm text-gray-300">Você está explorando este exemplo agora.</p>
                </div>
            </div>
        </div>
        
        {/* --- BOTÃO VOLTAR PARA O MENU --- */}
        <div className="grid grid-cols-1 mb-20">
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