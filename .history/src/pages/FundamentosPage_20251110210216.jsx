import React, { useState, useEffect } from 'react';
import caixeiroIcon from '../assets/imgs_icones/CaixeiroViajante.png';
import qaoaIcon from '../assets/imgs_icones/QAOA.png';
import portfolioIcon from '../assets/imgs_icones/OtimizacaoPortfolio.png';
import complexidadeIcon from '../assets/imgs_icones/ComplexidadeComputacional.png';

const FundamentosPage = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null); // 'next' or 'prev'

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

  const navigate = (newIndex, navDirection) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setDirection(navDirection);

    // Tempo para a animação de saída (fade-out)
    setTimeout(() => {
      setCurrentCardIndex(newIndex);
      // Tempo para a animação de entrada (fade-in)
      setTimeout(() => {
        setIsAnimating(false);
        setDirection(null);
      }, 300); // Duração da transição CSS
    }, 300); // Duração da transição CSS
  };

  const goToNextCard = () => {
    const newIndex = (currentCardIndex + 1) % totalCards;
    navigate(newIndex, 'next');
  };

  const goToPrevCard = () => {
    const newIndex = (currentCardIndex - 1 + totalCards) % totalCards;
    navigate(newIndex, 'prev');
  };

  const goToCard = (index) => {
    if (index === currentCardIndex) return;
    const navDirection = index > currentCardIndex ? 'next' : 'prev';
    navigate(index, navDirection);
  };

  const currentCard = cards[currentCardIndex];

  // Classes de animação baseadas no estado
  let animationClasses = 'transition-all duration-300 ease-in-out';
  if (isAnimating) {
    // Durante a animação, o card fica transparente e ligeiramente deslocado
    animationClasses += ' opacity-0';
    if (direction === 'next') {
      animationClasses += ' translate-x-4';
    } else if (direction === 'prev') {
      animationClasses += ' -translate-x-4';
    }
  } else {
    // Quando não está animando, o card está totalmente visível e na posição normal
    animationClasses += ' opacity-100 translate-x-0';
  }

  return (
    <>
      <div className="min-h-screen text-white py-20" style={{ backgroundColor: '#111' }}>
        {/* Header Section */}
        <div className="fundamentos-matematicos text-center text-white mt-10 mb-12">
          <h1 className="text-5xl font-bold mb-2">Fundamentos Matemáticos</h1>
          <p className="text-xl">Fórmulas e conceitos matemáticos por trás da computação quântica e otimização clássica</p>
        </div>

        {/* Carrossel Container */}
        <div className="max-w-xl mx-auto px-4 relative">
          
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

          {/* Card Único com Animação */}
          <div className="flex justify-center">
            <div 
              key={currentCard.id}
              className={`formula-card bg-[#6A1B9A] rounded-xl p-6 flex flex-col justify-between shadow-2xl w-full max-w-md ${animationClasses}`}
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
                className="ver-formula-btn bg-black border-none py-3 px-6 text-white text-lg font-semibold text-center rounded-lg cursor-pointer mt-4 transition-all duration-300 hover:bg-white hover:text-black inline-block text-decoration-none shadow-lg w-full active:scale-95"
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
          
          {/* Indicadores de Posição */}
          <div className="flex justify-center mt-8 space-x-2">
            {cards.map((_, index) => (
              <span
                key={index}
                className={`block h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentCardIndex ? 'bg-white' : 'bg-gray-500 hover:bg-gray-300'
                }`}
                onClick={() => goToCard(index)}
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