import { Link } from 'react-router-dom';
import caixeiroIcon from '../assets/imgs_icones/CaixeiroViajante_icone2.png';

const CaixeiroPage = () => {
  return (
    <div className="min-h-screen text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Botão Voltar */}
        <Link 
          to="/fundamentos" 
          className="inline-block mb-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
        >
          Voltar
        </Link>

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Problema do Caixeiro Viajante (TSP)
        </h1>

        {/* Card Principal */}
        <div className="bg-purple-600/60 rounded-2xl p-8 mb-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <img 
              src={caixeiroIcon} 
              alt="Ícone de um mapa com um pino de localização"
              className="w-24 h-24 object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-lg leading-relaxed">
              O Problema do Caixeiro Viajante busca encontrar a menor rota que visita todas as cidades 
              exatamente uma vez, retornando à cidade inicial no final.
            </p>
          </div>
        </div>

        {/* Função Objetivo */}
        <div className="bg-gray-900/50 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-6">Função Objetivo:</h3>
          
          <div className="bg-purple-700/40 rounded-lg p-6 mb-6 text-center">
            <p className="text-xl font-mono">
              min ∑<sub>(i,j)</sub> d<sub>ij</sub> * x<sub>ij</sub>
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Onde d<sub>ij</sub> é a distância entre cidades i e j, x<sub>ij</sub> = 1 se aresta (i,j) está na rota, 0 caso contrário
          </p>

          {/* Restrições */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-6">Restrições:</h3>
            
            <div className="space-y-4">
              <div className="bg-purple-700/20 rounded-lg p-4">
                <p className="font-mono text-lg">
                  ∑<sub>i</sub> x<sub>ij</sub> = 1, ∀i (cada cidade é visitada exatamente uma vez)
                </p>
              </div>
              
              <div className="bg-purple-700/20 rounded-lg p-4">
                <p className="font-mono text-lg">
                  ∑<sub>i</sub> x<sub>ij</sub> = 1, ∀j (cada cidade é deixada exatamente uma vez)
                </p>
              </div>
              
              <div className="bg-purple-700/20 rounded-lg p-4">
                <p className="font-mono text-lg">
                  ∑<sub>(i,j) ∈ S</sub> x<sub>ij</sub> ≤ |S| - 1, ∀S ⊂ V, |S| ≥ 2 (eliminação de subciclos)
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaixeiroPage;
