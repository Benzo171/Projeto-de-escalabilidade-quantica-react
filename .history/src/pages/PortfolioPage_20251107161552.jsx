import { Link } from 'react-router-dom';
import { TrendingUp, DollarSign, BarChart3, PieChart, Target, Zap } from 'lucide-react';

const PortfolioPage = () => {
  const conceitos = [
    {
      icon: TrendingUp,
      titulo: "Função Objetivo",
      conteudo: "Maximizar o retorno esperado do portfólio enquanto minimiza o risco através da diversificação de investimentos.",
      formula: "max E[R] - λ * Var[R]"
    },
    {
      icon: BarChart3,
      titulo: "Matriz de Covariância",
      conteudo: "Representa as correlações entre diferentes ativos financeiros para calcular o risco total do portfólio.",
      formula: "Σ = E[(R - μ)(R - μ)ᵀ]"
    },
    {
      icon: Target,
      titulo: "Fronteira Eficiente",
      conteudo: "Conjunto de portfólios que oferecem o maior retorno esperado para cada nível de risco.",
      formula: "min wᵀΣw sujeito a wᵀμ = μₚ"
    },
    {
      icon: Zap,
      titulo: "Abordagem Quântica",
      conteudo: "Algoritmos quânticos podem explorar simultaneamente múltiplas combinações de ativos através da superposição.",
      formula: "QAOA para otimização de portfólio"
    }
  ];

  const vantagens = [
    {
      icon: DollarSign,
      titulo: "Maximização de Retorno",
      descricao: "Algoritmos quânticos podem encontrar combinações ótimas de ativos mais rapidamente."
    },
    {
      icon: PieChart,
      titulo: "Diversificação Inteligente",
      descricao: "Análise simultânea de milhares de correlações entre ativos."
    },
    {
      icon: BarChart3,
      titulo: "Gestão de Risco",
      descricao: "Cálculo preciso de métricas de risco como VaR e CVaR."
    }
  ];

  return (
    <div className="min-h-screen text-white py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Otimização de Portfólio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Distribuir investimentos para maximizar retornos e minimizar riscos
          </p>
          
          <Link 
            to="/fundamentos"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
          >
            Voltar aos Fundamentos
          </Link>
        </div>

        {/* Visualização do problema */}
        <div className="mb-16">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto border border-gray-700/50">
            <h2 className="text-2xl font-semibold mb-6 text-center">Fronteira Eficiente</h2>
            <div className="relative bg-gray-900/50 rounded-lg p-8 h-64">
              {/* Gráfico simulado da fronteira eficiente */}
              <div className="relative w-full h-full">
                <svg className="absolute inset-0 w-full h-full">
                  {/* Eixos */}
                  <line x1="40" y1="200" x2="320" y2="200" stroke="#6b7280" strokeWidth="2"/>
                  <line x1="40" y1="200" x2="40" y2="40" stroke="#6b7280" strokeWidth="2"/>
                  
                  {/* Fronteira eficiente */}
                  <path d="M 50 180 Q 120 120 200 80 Q 250 60 300 50" 
                        stroke="#3b82f6" strokeWidth="3" fill="none"/>
                  
                  {/* Pontos de portfólios */}
                  <circle cx="80" cy="150" r="4" fill="#ef4444"/>
                  <circle cx="120" cy="120" r="4" fill="#10b981"/>
                  <circle cx="180" cy="90" r="4" fill="#f59e0b"/>
                  <circle cx="240" cy="70" r="4" fill="#8b5cf6"/>
                  
                  {/* Labels dos eixos */}
                  <text x="180" y="230" textAnchor="middle" fill="#9ca3af" fontSize="12">Risco (σ)</text>
                  <text x="20" y="120" textAnchor="middle" fill="#9ca3af" fontSize="12" transform="rotate(-90 20 120)">Retorno (μ)</text>
                </svg>
                
                {/* Legenda */}
                <div className="absolute bottom-4 right-4 bg-gray-800/80 rounded p-3 text-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-0.5 bg-blue-500"></div>
                    <span>Fronteira Eficiente</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Portfólio Ótimo</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-4">
              Relação entre risco e retorno na otimização de portfólio
            </p>
          </div>
        </div>

        {/* Conceitos principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {conceitos.map((conceito, index) => {
            const IconComponent = conceito.icon;
            return (
              <div 
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-blue-400" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white">
                      {conceito.titulo}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {conceito.conteudo}
                    </p>
                    
                    <div className="bg-gray-900/50 rounded p-3 font-mono text-sm text-blue-300">
                      {conceito.formula}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vantagens da Abordagem Quântica */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Vantagens da Computação Quântica</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {vantagens.map((vantagem, index) => {
              const IconComponent = vantagem.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-sm rounded-lg p-6 border border-green-500/20 text-center"
                >
                  <div className="w-16 h-16 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-green-400" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {vantagem.titulo}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {vantagem.descricao}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Exemplo prático */}
          <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-green-900/20 backdrop-blur-sm rounded-lg p-8 border border-blue-500/10">
            <h3 className="text-2xl font-semibold text-center mb-6">Exemplo Prático</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-3">Abordagem Clássica</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Otimização quadrática: O(n³)</li>
                  <li>• Limitado a centenas de ativos</li>
                  <li>• Rebalanceamento lento</li>
                  <li>• Aproximações necessárias</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-green-300 mb-3">Abordagem Quântica</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• QAOA: Exploração paralela</li>
                  <li>• Milhares de ativos simultaneamente</li>
                  <li>• Rebalanceamento em tempo real</li>
                  <li>• Soluções mais precisas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
