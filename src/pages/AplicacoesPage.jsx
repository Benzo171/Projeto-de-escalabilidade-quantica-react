import { Fuel, MapPin, TrendingUp, Zap, Shield, Cpu } from 'lucide-react';

const AplicacoesPage = () => {
  const aplicacoes = [
    {
      icon: Fuel,
      titulo: "Otimização de Combustível",
      descricao: "Reduzir gastos operacionais através de algoritmos de otimização quântica.",
      detalhes: "Utiliza algoritmos quânticos para encontrar as rotas mais eficientes em termos de consumo de combustível."
    },
    {
      icon: MapPin,
      titulo: "Planejamento de Rotas",
      descricao: "Otimização inteligente de trajetos para logística e transporte.",
      detalhes: "Aplicação do TSP quântico para resolver problemas complexos de roteamento em tempo real."
    },
    {
      icon: TrendingUp,
      titulo: "Otimização Financeira",
      descricao: "Maximizar retornos de investimento com análise quântica.",
      detalhes: "Algoritmos quânticos para otimização de portfólio e análise de risco financeiro."
    },
    {
      icon: Zap,
      titulo: "Eficiência Energética",
      descricao: "Redução do consumo energético em sistemas complexos.",
      detalhes: "Otimização quântica para distribuição inteligente de energia em redes elétricas."
    },
    {
      icon: Shield,
      titulo: "Segurança Cibernética",
      descricao: "Criptografia quântica para proteção de dados.",
      detalhes: "Implementação de protocolos de segurança baseados em princípios quânticos."
    },
    {
      icon: Cpu,
      titulo: "Processamento Paralelo",
      descricao: "Aceleração de computações complexas.",
      detalhes: "Aproveitamento do paralelismo quântico para resolver problemas intratáveis classicamente."
    }
  ];

  return (
    <div className="min-h-screen text-white py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aplicações
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore as diversas aplicações práticas da computação quântica em diferentes setores
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {aplicacoes.map((app, index) => {
            const IconComponent = app.icon;
            return (
              <div 
                key={index}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-700/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 border border-gray-700/50 hover:border-blue-500/30"
              >
                {/* Ícone */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                
                {/* Conteúdo */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                    {app.titulo}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {app.descricao}
                  </p>
                  
                  <p className="text-gray-400 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {app.detalhes}
                  </p>
                </div>
                
                {/* Indicador de hover */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Seção de destaque */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-lg p-8 max-w-5xl mx-auto border border-blue-500/10">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-semibold text-blue-200">
                O Futuro da Computação
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                A computação quântica representa uma revolução tecnológica que promete 
                transformar diversos setores da economia. Desde otimização logística até 
                descoberta de novos materiais, os algoritmos quânticos oferecem soluções 
                para problemas que são intratáveis para computadores clássicos.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">10x</div>
                  <div className="text-sm text-gray-400">Mais Eficiente</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">1000x</div>
                  <div className="text-sm text-gray-400">Mais Rápido</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">∞</div>
                  <div className="text-sm text-gray-400">Possibilidades</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AplicacoesPage;
