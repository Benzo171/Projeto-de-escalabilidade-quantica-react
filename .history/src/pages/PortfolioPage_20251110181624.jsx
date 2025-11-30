import { useState } from 'react';

// Componente de Logo Interativo
const InteractiveLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center gap-2 cursor-pointer h-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ícone roxo - sempre visível */}
      <svg 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="text-purple-500 w-6 h-6 flex-shrink-0"
      >
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>

      {/* Texto "accenture" com transição suave */}
      <div className="overflow-hidden">
        <span
          className={`text-white text-base font-semibold inline-block transition-all duration-300 ease-in-out ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}
        >
          accenture
        </span>
      </div>
    </div>
  );
};

// Componente Header
const Header = () => {
  return (
    <header className="w-full bg-black" style={{ backgroundColor: '#111' }}>
      <div className="w-full px-8 py-4 flex items-center justify-between">
        {/* Logo Interativo - Esquerda */}
        <InteractiveLogo />

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
            <span className="text-white text-sm font-medium">Brasil</span>
            <span className="text-white text-xs">⌄</span>
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

export default Header;