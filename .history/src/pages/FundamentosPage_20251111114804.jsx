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

  // Duplicar cards para efeito infinito
  const duplicatedCards = [...cards, ...cards];

  return (
    <div className="min-h-screen text-white py-20">
      {/* Header Section */}
      <div className="fundamentos-matematicos text-center text-white mt-10 mb-5">
        <h1 className="text-4xl mb-2">Fundamentos Matemáticos</h1>
        <p>Fórmulas e conceitos matemáticos por trás da computação quântica e otimização clássica</p>
      </div>

      {/* Carousel Container */}
      <div className="carousel-container w-full flex justify-start overflow-hidden">
        <div className="carousel-track flex animate-scroll hover:pause-animation">
          {duplicatedCards.map((card, index) => (
            <div 
              key={`${card.id}-${index}`}
              className="formula-card w-60 h-96 bg-purple-600/60 rounded-2xl p-5 flex flex-col justify-between shadow-lg mx-5 flex-shrink-0"
            >
              <div className="flex flex-col items-center">
                <img 
                  src={card.icon} 
                  alt={`Ícone ${card.title}`}
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <h4 className="text-xl mb-2 text-center font-semibold">
                  {card.title}
                </h4>
                <p className="text-center text-sm leading-relaxed mt-2">
                  {card.description}
                </p>
              </div>
              
              <a 
                href={card.link}
                className="bg-gray-900/75 border-none py-4 px-8 text-white text-base text-center rounded-2xl cursor-pointer mt-4 transition-all duration-300 hover:bg-white/75 hover:text-gray-900 inline-block text-decoration-none"
              >
                Ver Fórmula
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Section */}
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
