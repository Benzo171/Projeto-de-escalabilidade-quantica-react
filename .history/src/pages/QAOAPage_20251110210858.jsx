import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import raioIcon from '../assets/imgs_icones/Raio.png';
import playIcon from '../assets/imgs_icones/Play.png';
import bolinhaIcon from '../assets/imgs_icones/bolinha.png';

const QAOAPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Efeito para iniciar a animação de entrada da página
  useEffect(() => {
    // Adiciona um pequeno delay para garantir que o componente está montado
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50); 
    return () => clearTimeout(timer);
  }, []);

  // Componente auxiliar para animar a entrada de cada bloco
  const AnimatedBlock = ({ children, delay }) => {
    const [blockVisible, setBlockVisible] = useState(false);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setBlockVisible(true);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [isVisible, delay]);

    const animationClasses = `transition-all duration-700 ease-out transform ${
      blockVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`;

    return <div className={animationClasses}>{children}</div>;
  };

  return (
    <div className="min-h-screen text-white py-20 px-6" style={{ backgroundColor: '#111' }}>
      <div className="max-w-4xl mx-auto">
        
        {/* Título com Animação */}
        <AnimatedBlock delay={0}>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Algoritmo QAOA para TSP
          </h1>
        </AnimatedBlock>

        {/* Container Principal */}
        <div className="bg-[#6A1B9A] rounded-2xl p-8 space-y-8">
          
          {/* Botão Voltar com Animação */}
          <AnimatedBlock delay={100}>
            <Link 
              to="/fundamentos" 
              className="inline-block bg-[#6A1B9A] hover:bg-[#7B2BAA] text-white px-6 py-3 rounded-lg transition-colors duration-300 border border-purple-500 hover:scale-105 active:scale-95"
            >
              Voltar
            </Link>
          </AnimatedBlock>

          {/* BLOCO 1: Hamiltoniano de Custo */}
          <AnimatedBlock delay={200}>
            <div className="bg-gray-900/50 rounded-xl p-6 flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={raioIcon} 
                  alt="Ícone de um raio"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="text-xl font-semibold mb-4">Hamiltoniano de Custo:</p>
                <div className="bg-purple-700/40 rounded-lg p-4 mb-4 text-center">
                  <p className="text-lg font-mono">
                    H_C = Σ_(i,j) d_ij * (1 - z_i * z_j) / 2
                  </p>
                </div>
                <p className="text-gray-300">
                  Onde z_i são operadores Pauli-Z aplicados aos qubits representando as cidades.
                </p>
              </div>
            </div>
          </AnimatedBlock>

          {/* BLOCO 2: Hamiltoniano Mixer */}
          <AnimatedBlock delay={400}>
            <div className="bg-gray-900/50 rounded-xl p-6 flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={playIcon} 
                  alt="Ícone de um play"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="text-xl font-semibold mb-4">Hamiltoniano Mixer:</p>
                <div className="bg-purple-700/40 rounded-lg p-4 mb-4 text-center">
                  <p className="text-lg font-mono">
                    H_M = Σ_i X_i
                  </p>
                </div>
                <p className="text-gray-300">
                  Operadores Pauli-X que permitem transições entre estados quânticos.
                </p>
              </div>
            </div>
          </AnimatedBlock>

          {/* BLOCO 3: Estado Final QAOA */}
          <AnimatedBlock delay={600}>
            <div className="bg-gray-900/50 rounded-xl p-6 flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={bolinhaIcon} 
                  alt="Ícone de um círculo"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="text-xl font-semibold mb-4">Estado Final QAOA:</p>
                <div className="bg-purple-700/40 rounded-lg p-4 mb-4 text-center">
                  <p className="text-lg font-mono">
                    |ψ(β, γ)⟩ = e⁻ⁱᵝᴴᴹ e⁻ⁱᵞᴴᶜ |+⟩<sup>⊗n</sup>
                  </p>
                </div>
                <p className="text-gray-300">
                  Onde β e γ são parâmetros variacionais otimizados classicamente.
                </p>
              </div>
            </div>
          </AnimatedBlock>

        </div>

      </div>
    </div>
  );
};

export default QAOAPage;