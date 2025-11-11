import React, { useState } from 'react';
import caixeiroIcon from '../assets/imgs_icones/CaixeiroViajante.png';
import qaoaIcon from '../assets/imgs_icones/QAOA.png';
import portfolioIcon from '../assets/imgs_icones/OtimizacaoPortfolio.png';
import complexidadeIcon from '../assets/imgs_icones/ComplexidadeComputacional.png';

const FundamentosPage = () => {
  // 1. Gerenciamento de Estado para o Carrossel
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const cards = [
    {
      id: 1,
      icon: caixeiroIcon,
      title: "Problema do Caixeiro Viajante (TSP)",
      description: "Encontrar a rota mais curta que passa por toda a cidade exatamente uma vez.",
      link: "/caixeiro"
    },
    {
      id: 2,
      icon: qaoaIcon, 
      title: "Algoritmo QAOA para TSP",
      description: "Algoritmo quântico para otimização de rotas.",
      link: "/qaoa"
    },
    {
      id: 3,
      icon: portfolioIcon,
      title: "Otimização de Portfólio", 
      description: "Distribuir investimentos para maximizar retornos.",
      link: "/portfolio"
    },
    {
      id: 4,
      icon: complexidadeIcon,
      title: "Complexidade Computacional",
      description: "Resolver problemas que crescem com muitos elementos.",
      link: "/complexidade"
    }
  ];

  const totalCards = cards.length;

  // 2. Funções de Navegação
  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const goToPrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  // 3. Renderização do Card Atual
  const currentCard = cards[currentCardIndex];

  return (
    <>
      <div className="min-h-screen text-white py-20" style={{ backgroundColor: '#111' }}>
        {/* Header Section */}
        <div className="fundamentos-matematicos text-center text-white mt-10 mb-12">
          <h1 className="text-5xl font-bold mb-2">Fundamentos Matemáticos</h1>
          <p className="text-xl">Fórmulas e conceitos matemáticos por trás da computação quântica e otimização clássica</p>
        </div>

        {/* Carrossel Container */}
        <div className="max-w-xl mx-auto px-4 relative"> {/* max-w-xl para centralizar o card */}
          
          {/* Botão de Navegação Esquerdo */}
          <button
            onClick={goToPrevCard}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 text-white bg-black/50 hover:bg-black/80 rounded-full transition-all duration-300 ml-4"
            aria-label="Card Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Card Único */}
          <div className="flex justify-center">
            <div 
              key={currentCard.id}
              className="formula-card bg-[#6A1B9A] rounded-xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 w-full max-w-md" // w-full max-w-md para o card
            >
              <div className="flex flex-col items-center text-center h-full">
                {/* Título */}
                <h4 className="text-2xl font-bold mb-4 mt-4 min-h-[60px] flex items-center justify-center">
                  {currentCard.title}
                </h4>
                
                {/* Ícone */}
                <div className="w-full flex justify-center my-6">
                  <img 
                    src={currentCard.icon} 
                    alt={`Ícone ${currentCard.title}`}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                
                {/* Descrição */}
                <p className="text-gray-200 text-sm leading-relaxed mt-4 mb-6 flex-grow px-2">
                  {currentCard.description}
                </p>
              </div>
              
              {/* Botão "Ver Fórmula" */}
              <a 
                href={currentCard.link}
                className="ver-formula-btn bg-black border-none py-3 px-6 text-white text-lg font-semibold text-center rounded-lg cursor-pointer mt-4 transition-all duration-300 hover:bg-white hover:text-black inline-block text-decoration-none shadow-lg w-full"
              >
                Ver Fórmula
              </a>
            </div>
          </div>

          {/* Botão de Navegação Direito */}
          <button
            onClick={goToNextCard}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 text-white bg-black/50 hover:bg-black/80 rounded-full transition-all duration-300 mr-4"
            aria-label="Próximo Card"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Indicadores de Posição (Opcional, mas útil) */}
          <div className="flex justify-center mt-8 space-x-2">
            {cards.map((_, index) => (
              <span
                key={index}
                className={`block h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentCardIndex ? 'bg-white' : 'bg-gray-500 hover:bg-gray-300'
                }`}
                onClick={() => setCurrentCardIndex(index)}
                aria-label={`Ir para o Card ${index + 1}`}
              ></span>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default FundamentosPage;