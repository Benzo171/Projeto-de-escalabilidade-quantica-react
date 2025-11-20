// Componente de Logo Interativo (com texto "accenture")
const InteractiveLogo = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer h-6">
      {/* Ícone roxo */}
      <svg 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="text-purple-500 w-6 h-6 flex-shrink-0"
      >
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
      {/* Texto "accenture" */}
      <span className="text-white text-base font-semibold">accenture</span>
    </div>
  );
};

// Componente Header com o layout corrigido
const Header = () => {
  return (
    <header className="w-full bg-black" style={{ backgroundColor: '#000' }}>
      <div className="w-full px-8 py-4 flex items-center justify-between">
        {/* Logo e Link de Navegação - Esquerda */}
        <div className="flex items-center gap-8">
          <InteractiveLogo />
          <span className="text-white text-xl font-semibold cursor-pointer hover:opacity-80 transition-opacity">Gamificação ></span>
        </div>

        {/* Navegação e Ícones - Direita */}
        <div className="flex items-center gap-8">
          {/* Seletor de País/Região */}
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <svg 
              viewBox="0 0 24 24" 
              fill="white" 
              className="w-5 h-5"
            >
              <circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="2"/>
              <path d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20z" fill="none" stroke="white" strokeWidth="2"/>
            </svg>
            <span className="text-white text-sm font-medium">Brasil ></span>
          </div>

          {/* Ícone de Busca */}
          <button className="text-white hover:opacity-80 transition-opacity">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
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

import caixeiroIcon from '../assets/imgs_icones/CaixeiroViajante.png';
import qaoaIcon from '../assets/imgs_icones/QAOA.png';
import portfolioIcon from '../assets/imgs_icones/OtimizacaoPortfolio.png';
import complexidadeIcon from '../assets/imgs_icones/ComplexidadeComputacional.png';
const FundamentosPage = () => {  const cards = [
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

  return (
    <>
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
                className="formula-card bg-[#6A1B9A] rounded-xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/50"
              >
                <div className="flex flex-col items-center text-center h-full">
                  {/* Título */}
                  <h4 className="text-2xl font-bold mb-4 mt-4 min-h-[60px] flex items-center justify-center">
                    {card.title}
                  </h4>
                  
                  {/* Ícone */}
                  <div className="w-full flex justify-center my-6">
                    <img 
                      src={card.icon} 
                      alt={`Ícone ${card.title}`}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  
                  {/* Descrição */}
                  <p className="text-gray-200 text-sm leading-relaxed mt-4 mb-6 flex-grow px-2">
                    {card.description}
                  </p>
                </div>
                
                {/* Botão "Ver Fórmula" */}
                <a 
                  href={card.link}
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