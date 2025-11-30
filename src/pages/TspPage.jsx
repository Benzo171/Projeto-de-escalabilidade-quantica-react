// TspPage.jsx
import React from 'react';

const TspPage = () => {
 return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-4">
          Problema do Caixeiro Viajante (TSP)
        </p>

        <h1 className="text-4xl md:text-5xl font-inter font-bold mb-8">
          Roteamento otimizado
          <span className="block text-[#7703BA] mt-1">com inspiração Quântica</span>
        </h1>

        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          Aqui você explora o TSP em um cenário de roteamento: partindo de um conjunto de cidades,
          buscamos a rota mais curta possível que visite todas e retorne ao ponto inicial.
        </p>
      </div>
    </div>
  );
};

export default TspPage;