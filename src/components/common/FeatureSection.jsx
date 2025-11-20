// src/components/common/FeatureSection.jsx
import React from 'react';

const FeatureSection = ({ image, title, description, linkTo, imageSide = 'right' }) => {
  
  const isImageLeft = imageSide === 'left';

  return (
    <div 
      className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      
      {/* Bloco de Texto */}
      <div 
        className="w-full md:w-1-2 text-white animate-fade-in flex flex-col justify-center
                   px-6 py-12 sm:px-12 md:py-16 lg:px-20" // MUDOU (py-24 -> py-16, lg:px-24 -> lg:px-20)
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {title}
        </h2> 
        {/* // MUDOU (text-3xl md:text-4xl -> text-2xl md:text-3xl) */}

        <p className="text-base text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>
        {/* // MUDOU (text-lg -> text-base) */}

        <a 
          href={linkTo} 
          className="text-purple-400 font-semibold text-base hover:text-purple-300 self-start"
        >
          Saiba mais
        </a>
        {/* // MUDOU (text-lg -> text-base) */}
      </div>

      {/* Bloco de Imagem */}
      <div className="w-full md:w-1/2 animate-fade-in">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full min-h-[300px] md:min-h-0"
        />
      </div>
      
    </div>
  );
};

export default FeatureSection;