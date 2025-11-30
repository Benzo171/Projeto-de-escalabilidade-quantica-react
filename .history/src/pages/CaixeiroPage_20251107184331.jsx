// Componente de Logo Simples (apenas o ícone roxo)
const SimpleLogo = () => {
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
    </div>
  );
};

// Componente Header simplificado
const Header = () => {
  return (
    <header className="w-full bg-black" style={{ backgroundColor: '#000' }}>
      <div className="w-full px-8 py-4 flex items-center justify-between">
        {/* Logo e Link de Navegação - Esquerda */}
        <div className="flex items-center gap-8">
          <SimpleLogo />
          <span className="text-white text-xl font-semibold cursor-pointer hover:opacity-80 transition-opacity">Gamificação ></span>
        </div>

        {/* Navegação e Ícones - Direita */}
        <div className="flex items-center gap-8">
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
        </div>
      </div>
    </header>
  );
};

import { Link } from 'react-router-dom';
import caixeiroIcon from '../assets/imgs_icones/CaixeiroViajante_icone2.png';

const CaixeiroPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen text-white px-6 pt-12">
      <div className="max-w-4xl mx-auto">
        


        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Problema do Caixeiro Viajante (TSP)
        </h1>

        {/* Card Principal */}
        <div className="mb-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <img 
              src={caixeiroIcon} 
              alt="Ícone de um mapa com um pino de localização"
              className="w-24 h-24 object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-lg leading-relaxed">
              O Problema do Caixeiro Viajante busca encontrar a menor rota que visita todas as cidades 
              exatamente uma vez.
            </p>
          </div>
        </div>

        {/* Função Objetivo e Restrições */}
        <div className="bg-purple-700 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Função Objetivo:</h3>
          
          <div className="bg-purple-900/50 rounded-lg p-2 mb-4 inline-block">
            <p className="text-xl font-mono">
              min ∑<sub>(i,j)</sub> d<sub>ij</sub> * x<sub>ij</sub>
            </p>
          </div>

          <p className="text-white leading-relaxed mb-6">
            Onde d<sub>ij</sub> é a distância entre as cidades i e j, x<sub>ij</sub> = 1 se a aresta (i,j) está na rota, 0 caso contrário.
          </p>

          {/* Restrições */}
          <h3 className="text-2xl font-semibold mb-4">Restrições:</h3>
          
          <div className="space-y-2">
            <p className="font-mono text-lg">
              ∑<sub>j</sub> x<sub>ij</sub> = 1, ∀i (cada cidade é visitada exatamente uma vez)
            </p>
            <p className="font-mono text-lg">
              ∑<sub>i</sub> x<sub>ij</sub> = 1, ∀j (cada cidade é deixada exatamente uma vez)
            </p>
            <p className="font-mono text-lg">
              ∑<sub>(i,j) ∈ S</sub> x<sub>ij</sub> ≤ |S| - 1, ∀S ⊂ V, |S| ≥ 2 (eliminação de subciclos)
            </p>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default CaixeiroPage;