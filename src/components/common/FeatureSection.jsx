// src/components/common/FeatureSection.jsx
import React, { useState } from 'react';

const FeatureSection = ({ image, title, description, linkTo, imageSide = 'right' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isImageRight = imageSide === 'right';

  return (
    <div 
      // AJUSTE DO GAP (MEIO-TERMO):
      // Mobile: mb-24 (96px) - Confortável para telemóveis.
      // Desktop: lg:mb-72 (288px) - Grande o suficiente para dar destaque, mas sem exageros.
      className={`relative w-full h-[380px] lg:h-[400px] flex overflow-hidden rounded-2xl mb-24 lg:mb-72 transition-all duration-700 ease-in-out shadow-2xl
        flex-col ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'}
      `}
    >
      
      {/* --- BLOCO DE TEXTO --- */}
      <div 
        className={`
          flex flex-col
          transition-all duration-700 ease-in-out overflow-hidden
          ${isExpanded 
            ? 'h-auto opacity-100 p-6 lg:p-8 lg:h-full w-full lg:w-3/5' 
            : 'h-0 opacity-0 p-0 lg:h-full lg:w-0'
          }
        `}
      >
        <div className="flex flex-col h-full w-full min-w-[300px]"> 
          
          <div className="flex-1 overflow-hidden">
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-2 leading-tight">
              {title}
            </h2>
            
            <p className="text-sm lg:text-base text-gray-300 leading-relaxed line-clamp-4 lg:line-clamp-5">
              {description}
            </p>
          </div>

          <div className="flex-shrink-0 flex items-center gap-4 mt-4 pt-2 border-t border-white/10">
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-purple-300 font-semibold hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              Ver menos 
              <span className="rotate-180">➤</span>
            </button>

            <a 
              href={linkTo || '#'}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-5 rounded-full transition-all shadow-lg hover:shadow-purple-500/50 text-sm whitespace-nowrap"
            >
              Saiba mais
            </a>
          </div>

        </div>
      </div>

      {/* --- BLOCO DA IMAGEM --- */}
      <div 
        className={`
          relative h-full transition-all duration-700 ease-in-out
          ${isExpanded ? 'lg:w-2/5' : 'lg:w-full'}
          w-full
        `}
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />

        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} />

        <div 
          className={`
            absolute inset-0 flex flex-col justify-end items-start p-8 lg:p-10
            transition-all duration-500 transform
            ${isExpanded ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}
          `}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 max-w-4xl drop-shadow-lg leading-tight">
            {title}
          </h2>

          <button
            onClick={() => setIsExpanded(true)}
            className="group flex items-center gap-2 text-white text-base lg:text-lg font-semibold border-b border-purple-500 pb-0.5 hover:text-purple-400 transition-all"
          >
            Ver mais
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              ➜
            </span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default FeatureSection;