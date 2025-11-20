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
    <>     <div className="min-h-screen text-white py-20" style={{ backgroundColor: '#111' }}>
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