// TspPage.jsx
import React from 'react';

const TspPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-4">
            Problema do Caixeiro Viajante (TSP)
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Roteamento Otimizado
            <span className="block text-[#7703BA] mt-1">com Inspiração Quântica</span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Aqui você explora o TSP em um cenário de roteamento: partindo de um conjunto de cidades,
            buscamos a rota mais curta possível que visite todas e retorne ao ponto inicial.
          </p>
        </div>

        <div className="bg-transparent rounded-2xl p-8 border border-purple-500/30 transition-all duration-300 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20">
          <p className="text-gray-300 leading-relaxed">
            Nas próximas seções, você verá visualizações interativas que comparam a dificuldade de resolver o TSP
            em computadores clássicos e quânticos, seguindo o mesmo estilo visual das demais páginas de problemas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TspPage;