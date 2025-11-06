// src/components/common/AnimatedExploreSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// (Este componente não tem mais animação, como você pediu)
const AnimatedExploreSection = ({ image, titleText, buttonLink, buttonText, paragraphText }) => {

  return (
    // 1. A SECTION (PAI) NÃO TEM 'container' NEM 'max-w'. Ela ocupa 100% da largura.
    <section className="py-20 flex flex-col items-center">
      
      {/* 2. ESTE DIV INTERNO TAMBÉM NÃO TEM 'container'. É 'w-full'. */}
      <div className="w-full text-center">
        
        {/* TÍTULO: Fica DENTRO de um container para limitar a largura */}
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            {titleText}
          </h2>
        </div>
        
        {/* ---------------------------------- */}
        {/* 3. IMAGEM: Fica FORA de um container */}
        {/* Este 'div' é 'w-full' (largura total) */}
        {/* É ISSO QUE FAZ A IMAGEM IR DE PONTA A PONTA */}
        <div className="w-full h-[325px] overflow-hidden mb-12 relative"> 
          <img 
            src={image} 
            alt={titleText} 
            className="w-full h-full object-cover" 
          />

            <Link 
              to={buttonLink} 
              className="bg-[#7703BA] text-black font-bold text-xl py-4 px-20 rounded-lg hover:bg-purple-700 transition-colors duration-300 absolute bottom-5 left-1/2 -translate-x-1/2 "
            >
              {buttonText}
            </Link>


        </div>
      
        
        {/* PARÁGRAFO: Fica DENTRO de um container */}
        <div className="container mx-auto px-6 max-w-3xl mp-35">
          <p className="text-xl text-gray-300 leading-relaxed mx-auto mp-20 ">
            {paragraphText}
          </p>
        </div>

      </div>
    </section>
  );
};

export default AnimatedExploreSection;