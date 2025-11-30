import React from 'react';
import { Link } from 'react-router-dom';
import caixeiroIcon from '../assets/imgs_icones/CaixeiroViajante.png';
import portfolioIcon from '../assets/imgs_icones/OtimizacaoPortfolio.png';
import complexidadeIcon from '../assets/imgs_icones/ComplexidadeComputacional.png';

const FundamentosPage = () => {
  const cards = [
    {
      id: 1,
      icon: caixeiroIcon,
      title: 'Problema do Caixeiro Viajante (TSP)',
      description: 'Encontrar a rota mais curta que passa por toda a cidade exatamente uma vez.',
      link: '/caixeiro',
    },
    {
      id: 3,
      icon: portfolioIcon,
      title: 'Otimização de Portfólio',
      description: 'Distribuir investimentos para maximizar retornos.',
      link: '/portfolio',
    },
    {
      id: 4,
      icon: complexidadeIcon,
      title: 'Complexidade Computacional',
      description: 'Resolver problemas que crescem com muitos elementos.',
      link: '/complexidade',
    },
  ];

  return (
    <div className="min-h-screen text-white py-20 bg-black">
      {/* Header */}
      <div className="fundamentos-matematicos text-center text-white mt-10 mb-12">
        <h1 className="text-5xl font-bold mb-2">Fundamentos Matemáticos</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Fórmulas e conceitos matemáticos por trás da computação quântica e otimização clássica
        </p>
      </div>

      {/* Três cards lado a lado */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group formula-card bg-[#6A1B9A] rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl transform transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:shadow-purple-500/40"
          >
            <h4 className="text-2xl font-bold mb-4 mt-2 min-h-[64px] flex items-center justify-center">
              {card.title}
            </h4>

            <div className="w-full flex justify-center my-6">
              <img
                src={card.icon}
                alt={`Ícone ${card.title}`}
                className="w-24 h-24 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>

            <p className="text-gray-200 text-sm leading-relaxed mt-2 mb-6 flex-grow px-2">
              {card.description}
            </p>

            <Link
              to={card.link}
              className="bg-black border-none py-3 px-6 text-white text-lg font-semibold text-center rounded-lg cursor-pointer mt-4 transition-all duration-200 hover:bg-white hover:text-black inline-block shadow-lg w-full active:scale-95"
            >
              Ver Fórmula
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundamentosPage;
