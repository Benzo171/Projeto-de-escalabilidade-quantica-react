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

    // Mantendo a animação de entrada original, mas adicionando a classe 'group' para os efeitos de hover
    const animationClasses = `transition-all duration-700 ease-out transform ${
      blockVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    } group`;

    return <div className={animationClasses}>{children}</div>;
  };

  return (
    <div className="min-h-screen text-white py-20 px-6" style={{ backgroundColor: '#111' }}>
      <div className="max-w-4xl mx-auto">
        
        {/* Título e Botão Voltar em um container flex para alinhamento */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
          {/* Botão Voltar com Animação e Efeitos de Hover */}
          <AnimatedBlock delay={100}>
            <Link 
              to="/fundamentos" 
              className="inline-block mb-4 md:mb-0 bg-[#6A1B9A] hover:bg-[#7B2BAA] text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            >
              Voltar
            </Link>
          </AnimatedBlock>

          {/* Título com Animação */}
          <AnimatedBlock delay={0}>
            <h1 className="text-4xl md:text-5xl font-bold text-center md:text-right">
              Algoritmo QAOA para TSP
            </h1>
          </AnimatedBlock>
        </div>

        {/* Container Principal Removido - Adicionando espaçamento entre os blocos */}
        <div className="space-y-8">
          
          {/* BLOCO 1: Hamiltoniano de Custo - Adicionando Efeitos de Hover */}
          <AnimatedBlock delay={200}>
            <div className="bg-gray-900/50 rounded-xl p-6 flex flex-col md:flex-row items-start gap-6 border border-purple-500/30 transition-all duration-300 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 group">
              <div className="flex-shrink-0">
                <img 
                  src={raioIcon} 
                  alt="Ícone de um raio"
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <p className="text-xl font-semibold mb-4 group-hover:text-purple-300 transition-colors duration-300">Hamiltoniano de Custo:</p>
                <div className="bg-purple-700/40 rounded-lg p-4 mb-4 text-center border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
                  <p className="text-lg font-mono">
                    H_C = Σ_(i,j) d_ij * (1 - z_i * z_j) / 2
                  </p>
                </div>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  Onde z_i são operadores Pauli-Z aplicados aos qubits representando as cidades.
                </p>
              </div>
            </div>
          </AnimatedBlock>

          {/* BLOCO 2: Hamiltoniano Mixer - Adicionando Efeitos de Hover */}
          <AnimatedBlock delay={400}>
            <div className="bg-gray-900/50 rounded-xl p-6 flex flex-col md:flex-row items-start gap-6 border border-purple-500/30 transition-all duration-300 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 group">
              <div className="flex-shrink-0">
                <img 
                  src={playIcon} 
                  alt="Ícone de um play"
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <p className="text-xl font-semibold mb-4 group-hover:text-purple-300 transition-colors duration-300">Hamiltoniano Mixer:</p>
                <div className="bg-purple-700/40 rounded-lg p-4 mb-4 text-center border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
                  <p className="text-lg font-mono">
                    H_M = Σ_i X_i
                  </p>
                </div>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  Operadores Pauli-X que permitem transições entre estados quânticos.
                </p>
              </div>
            </div>
          </AnimatedBlock>

          {/* BLOCO 3: Estado Final QAOA - Adicionando Efeitos de Hover */}
          <AnimatedBlock delay={600}>
            <div className="bg-gray-900/50 rounded-xl p-6 flex flex-col md:flex-row items-start gap-6 border border-purple-500/30 transition-all duration-300 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 group">
              <div className="flex-shrink-0">
                <img 
                  src={bolinhaIcon} 
                  alt="Ícone de um círculo"
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <p className="text-xl font-semibold mb-4 group-hover:text-purple-300 transition-colors duration-300">Estado Final QAOA:</p>
                <div className="bg-purple-700/40 rounded-lg p-4 mb-4 text-center border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
                  <p className="text-lg font-mono">
                    |ψ(β, γ)⟩ = e⁻ⁱᵝᴴᴹ e⁻ⁱᵞᴴᶜ |+⟩<sup>⊗n</sup>
                  </p>
                </div>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
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