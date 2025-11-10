import { useEffect } from 'react';
import caixeiroIcon from '../assets/imgs_icones/CaixeiroViajante.png';
import qaoaIcon from '../assets/imgs_icones/QAOA.png';
import portfolioIcon from '../assets/imgs_icones/OtimizacaoPortfolio.png';
import complexidadeIcon from '../assets/imgs_icones/ComplexidadeComputacional.png';

const FundamentosPage = () => {
  const cards = [
    {
      id: 1,
      icon: caixeiroIcon,
      title: "Problema do Caixeiro Viajante (TSP)",
      description: "Encontrar a rota mais curta que passa por toda a cidade exatamente uma vez.",
      link: "/caixeiro" // Link para página do caixeiro viajante
    },
    {
      id: 2,
      icon: qaoaIcon, 
      title: "Algoritmo QAOA para TSP",
      description: "Algoritmo quântico para otimização de rotas.",
      link: "/qaoa" // Link para página QAOA
    },
    {
      id: 3,
      icon: portfolioIcon,
      title: "Otimização de Portfólio", 
      description: "Distribuir investimentos para maximizar retornos.",
      link: "/portfolio" // Link para página de portfólio
    },
    {
      id: 4,
      icon: complexidadeIcon,
      title: "Complexidade Computacional",
      description: "Resolver problemas que crescem com muitos elementos.",
      link: "/complexidade" // Link para página de complexidade
    }
  ];

  return (
    <div className="min-h-screen text-white py-20">
      {/* Header Section */}
      <div className="fundamentos-matematicos text-center text-white mt-10 mb-12">
        <h1 className="text-5xl font-bold mb-2">Fundamentos Matemáticos</h1>
        <p className="text-xl">Fórmulas e conceitos matemáticos por trás da computação quântica e otimização clássica</p>
      </div>

      {/* Cards Grid Container */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div 
              key={card.id}
              className="formula-card bg-purple-900 rounded-lg p-6 flex flex-col justify-between shadow-2xl border-2 border-purple-700 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col items-center text-center h-full">
                {/* Título */}
                <h4 className="text-2xl font-bold mb-4 min-h-[60px] flex items-center justify-center">
                  {card.title}
                </h4>
                
                {/* Ícone */}
                <img 
                  src={card.icon} 
                  alt={`Ícone ${card.title}`}
                  className="w-24 h-24 mx-auto my-6 object-contain"
                />
                
                {/* Descrição */}
                <p className="text-gray-300 text-base leading-relaxed mt-4 mb-6 flex-grow">
                  {card.description}
                </p>
              </div>
              
              {/* Botão */}
              <a 
                href={card.link}
                className="ver-formula-btn bg-purple-700 border-none py-3 px-6 text-white text-lg font-semibold text-center rounded-full cursor-pointer mt-4 transition-all duration-300 hover:bg-white hover:text-purple-900 inline-block text-decoration-none shadow-lg"
              >
                Ver Fórmula
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Section - Mantido, mas ajustado para o novo layout */}
      <div className="max-w-4xl mx-auto mt-20 px-6">
        <div className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-lg p-8 border border-purple-500/10">
          <h2 className="text-3xl font-semibold text-center mb-6">Explore os Conceitos</h2>
          <p className="text-gray-300 text-center leading-relaxed">
            Cada card acima representa um conceito fundamental na intersecção entre matemática, 
            computação clássica e computação quântica. Clique em qualquer um deles para explorar 
            as fórmulas, algoritmos e aplicações práticas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundamentosPage;