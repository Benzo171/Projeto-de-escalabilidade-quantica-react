// src/components/common/FeatureSection.jsx
import React, { useState } from 'react';

// Componente de card "puxável" para a Home
// Mostra um texto resumido e, ao clicar em "Ver mais", expande
// para exibir a descrição completa + link "Saiba mais".
const FeatureSection = ({ image, title, description, linkTo, imageSide = 'right' }) => {
  const isImageLeft = imageSide === 'left';
  const [isExpanded, setIsExpanded] = useState(false);

  // Mini texto (preview) que aparece quando o card está fechado
  const previewText = !isExpanded && description
    ? description.length > 180
      ? description.slice(0, 180) + '...'
      : description
    : description;

  return (
    <div
      className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Bloco de Texto */}
      <div
        className="w-full md:w-1-2 text-white animate-fade-in flex flex-col justify-center px-6 py-12 sm:px-12 md:py-16 lg:px-20"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {title}
        </h2>

        {/* Mini texto + descrição expandida */}
        <p className="text-base text-gray-300 leading-relaxed mb-4">
          {previewText}
        </p>

        {/* Controles de expansão */}
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="text-sm text-purple-300 font-semibold flex items-center gap-2 mb-2 hover:text-purple-200 transition-colors"
        >
          {isExpanded ? 'Ver menos' : 'Ver mais'}
          <span className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>

        {/* Quando estiver expandido, mostra o link "Saiba mais" */}
        {isExpanded && (
          <a
            href={linkTo || '#'}
            className="text-purple-400 font-semibold text-base hover:text-purple-300 self-start mt-2"
          >
            Saiba mais
          </a>
        )}
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
