import { useEffect } from 'react';
import caixeiroIcon from '../assets/imgs_icones/CaixeiroViajante.png';
import qaoaIcon from '../assets/imgs_icones/QAOA.png';
import portfolioIcon from '../assets/imgs_icones/OtimizacaoPortfolio.png'; // Caminho corrigido
import complexidadeIcon from '../assets/imgs_icones/ComplexidadeComputacional.png';

// Componente Header
const Header = () => {
  return (
    <header className="bg-black border-b border-purple-600" style={{ backgroundColor: '#111' }}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo e Título */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              className="text-purple-500 w-8 h-8"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
          <span className="text-white text-lg font-semibold">Gamificação</span>
          <span className="text-gray-400 text-lg">></span>
        </div>

        {/* Navegação e Ícones */}
        <div className="flex items-center gap-6">
          {/* Seletor de País/Região */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-purple-400 transition-colors">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="text-white w-5 h-5"
              >
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20z" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span className="text-white text-sm">Brasil</span>
            <span className="text-gray-400">></span>
          </div>

          {/* Ícone de Busca */}
          <button className="text-white hover:text-purple-400 transition-colors">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              className="w-5 h-5"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

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
    <>
      {/* Header Component */}
      <Header />
      
      <div className="min-h-screen text-white py-20" style={{ backgroundColor: '#111' }}>
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
                // Cor de fundo roxa exata da imagem e arredondamento
                className="formula-card bg-[#6A1B9A] rounded-xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/50"
              >
                <div className="flex flex-col items-center text-center h-full">
                  {/* Título - Mais espaçamento e centralizado */}
                  <h4 className="text-2xl font-bold mb-4 mt-4 min-h-[60px] flex items-center justify-center">
                    {card.title}
                  </h4>
                  
                  {/* Ícone - Removido, pois a imagem mostra ícones SVG/Componentes, mas mantendo a estrutura para o texto */}
                  {/* Se você estiver usando ícones SVG, você deve substituir a tag <img> pelo seu componente SVG */}
                  <div className="w-full flex justify-center my-6">
                    <img 
                      src={card.icon} 
                      alt={`Ícone ${card.title}`}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  
                  {/* Descrição - Texto menor e mais espaçado */}
                  <p className="text-gray-200 text-sm leading-relaxed mt-4 mb-6 flex-grow px-2">
                    {card.description}
                  </p>
                </div>
                
                {/* Botão "Ver Fórmula" - Cor preta, bordas arredondadas e efeito hover */}
                <a 
                  href={card.link}
                  // Cor de fundo do botão: Preto (#000000)
                  className="ver-formula-btn bg-black border-none py-3 px-6 text-white text-lg font-semibold text-center rounded-lg cursor-pointer mt-4 transition-all duration-300 hover:bg-white hover:text-black inline-block text-decoration-none shadow-lg w-full"
                >
                  Ver Fórmula
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FundamentosPage;