import { Link } from 'react-router-dom';
import raioIcon from '../assets/imgs_icones/Raio.png';
import playIcon from '../assets/imgs_icones/Play.png';
import bolinhaIcon from '../assets/imgs_icones/bolinha.png';

const QAOAPage = () => {
  return (
    <div className="min-h-screen text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Algoritmo QAOA para TSP
        </h1>

        {/* Container Principal */}
        <div className="bg-purple-600/60 rounded-2xl p-8 space-y-8">
          
          {/* Botão Voltar */}
          <Link 
            to="/fundamentos" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Voltar
          </Link>

          {/* BLOCO 1: Hamiltoniano de Custo */}
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

          {/* BLOCO 2: Hamiltoniano Mixer */}
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

          {/* BLOCO 3: Estado Final QAOA */}
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

        </div>

      </div>
    </div>
  );
};

export default QAOAPage;
