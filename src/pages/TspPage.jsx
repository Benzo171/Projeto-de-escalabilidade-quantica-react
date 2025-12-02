import React from 'react';
import { useNavigate } from 'react-router-dom';

const TspPage = () => {
  const navigate = useNavigate();

  const handleBackToCategories = () => {
    navigate('/'); 
    // Pequeno delay para garantir que a navegação ocorreu antes de rolar
    setTimeout(() => {
        const section = document.getElementById('categories-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 pb-20 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* --- BOTÃO DE VOLTAR NO TOPO --- */}
        <div className="mb-8 flex justify-start">
            <button 
                onClick={handleBackToCategories}
                className="flex items-center gap-2 text-purple-400 hover:text-purple-200 transition-colors font-semibold uppercase text-sm tracking-widest cursor-pointer"
            >
                <span>←</span> Voltar para o Menu
            </button>
        </div>

        {/* Cabeçalho */}
        <div className="text-center mb-12">
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

        {/* Conteúdo Explicativo */}
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-purple-500/30 mb-12 backdrop-blur-sm">
          <p className="text-gray-300 leading-relaxed mb-6">
            Nas próximas seções, você verá visualizações interativas que comparam a dificuldade de resolver o TSP
            em computadores clássicos e quânticos, seguindo o mesmo estilo visual das demais páginas de problemas.
          </p>
        </div>

        {/* --- BOTÃO GRANDE NO FINAL (EMBUTIDO) --- */}
        <div className="border-t border-gray-800 pt-10 mt-10 pb-20">
            <button
                onClick={handleBackToCategories}
                className="w-full sm:w-auto mx-auto flex items-center justify-center gap-3 py-4 px-8 bg-purple-900/40 border border-purple-500/50 rounded-xl text-white font-bold hover:bg-purple-900/80 hover:border-purple-400 transition-all duration-300 group cursor-pointer"
            >
                <span className="text-xl transition-transform group-hover:-translate-x-1">←</span>
                <span>Voltar para Seleção de Problemas</span>
            </button>
        </div>

      </div>

      {/* --- BOTÃO DE EMERGÊNCIA FLUTUANTE (FIXED) --- 
          Este botão ficará fixo no canto inferior direito do ecrã.
          Se este botão aparecer, o problema nos outros é de layout/corte.
      */}
      <div 
        style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 9999,
        }}
      >
        <button
            onClick={handleBackToCategories}
            className="flex items-center justify-center w-14 h-14 bg-purple-600 rounded-full shadow-2xl hover:bg-purple-500 hover:scale-110 transition-all duration-300 border-2 border-white cursor-pointer"
            title="Voltar ao Menu"
        >
            <span className="text-2xl text-white">↩</span>
        </button>
      </div>

    </div>
  );
};

export default TspPage;