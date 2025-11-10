import { Link } from 'react-router-dom';
import caixeiroIcon from '../assets/imgs_icones/CaixeiroViajante_icone2.png';

const CaixeiroPage = () => {
  return (
    <div className="min-h-screen text-white px-6 pt-12" style={{ backgroundColor: '#111' }}>
      <div className="max-w-4xl mx-auto">
        
        {/* Botão Voltar */}
        <Link 
          to="/fundamentos" 
          className="inline-block mb-8 bg-[#6A1B9A] hover:bg-[#7B2BAA] text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
        >
          Voltar para Fundamentos
        </Link>

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Problema do Caixeiro Viajante (TSP)
        </h1>

        {/* Card Principal */}
        <div className="mb-8 flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl border border-purple-500/30 transition-all duration-300 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 group">
          <div className="flex-shrink-0">
            <img 
              src={caixeiroIcon} 
              alt="Ícone de um mapa com um pino de localização"
              className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-lg leading-relaxed group-hover:text-purple-200 transition-colors duration-300">
              O Problema do Caixeiro Viajante busca encontrar a menor rota que visita todas as cidades 
              exatamente uma vez.
            </p>
          </div>
        </div>

        {/* Função Objetivo e Restrições */}
        <div className="bg-transparent rounded-2xl p-8 mb-8 border border-purple-500/30 transition-all duration-300 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 group">
          <h3 className="text-2xl font-semibold mb-4 group-hover:text-purple-300 transition-colors duration-300">Função Objetivo:</h3>
          
          <div className="bg-purple-600/30 rounded-lg p-4 mb-4 inline-block border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
            <p className="text-xl font-mono text-purple-300">
              min ∑<sub>(i,j)</sub> d<sub>ij</sub> * x<sub>ij</sub>
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
            Onde d<sub>ij</sub> é a distância entre as cidades i e j, x<sub>ij</sub> = 1 se a aresta (i,j) está na rota, 0 caso contrário.
          </p>

          {/* Restrições */}
          <h3 className="text-2xl font-semibold mb-4 group-hover:text-purple-300 transition-colors duration-300">Restrições:</h3>
          
          <div className="space-y-2">
            <p className="font-mono text-lg text-gray-300 group-hover:text-purple-200 transition-colors duration-300">
              ∑<sub>j</sub> x<sub>ij</sub> = 1, ∀i (cada cidade é visitada exatamente uma vez)
            </p>
            <p className="font-mono text-lg text-gray-300 group-hover:text-purple-200 transition-colors duration-300">
              ∑<sub>i</sub> x<sub>ij</sub> = 1, ∀j (cada cidade é deixada exatamente uma vez)
            </p>
            <p className="font-mono text-lg text-gray-300 group-hover:text-purple-200 transition-colors duration-300">
              ∑<sub>(i,j) ∈ S</sub> x<sub>ij</sub> ≤ |S| - 1, ∀S ⊂ V, |S| ≥ 2 (eliminação de subciclos)
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaixeiroPage;