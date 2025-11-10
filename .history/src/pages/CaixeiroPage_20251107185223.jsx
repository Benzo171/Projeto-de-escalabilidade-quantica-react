import { Link } from 'react-router-dom';
import caixeiroIcon from '../assets/imgs_icones/CaixeiroViajante_icone2.png';

const CaixeiroPage = () => {
  return (
    <div className="min-h-screen text-white px-6 pt-12" style={{ backgroundColor: '#000' }}>
      <div className="max-w-4xl mx-auto">
        


        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Problema do Caixeiro Viajante (TSP)
        </h1>

        {/* Card Principal */}
        <div className="mb-8 flex flex-col md:flex-row items-center gap-6">
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
              exatamente uma vez.
            </p>
          </div>
        </div>

        {/* Função Objetivo e Restrições */}
        <div className="bg-purple-700 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Função Objetivo:</h3>
          
          <div className="bg-purple-900/50 rounded-lg p-2 mb-4 inline-block">
            <p className="text-xl font-mono">
              min ∑<sub>(i,j)</sub> d<sub>ij</sub> * x<sub>ij</sub>
            </p>
          </div>

          <p className="text-white leading-relaxed mb-6">
            Onde d<sub>ij</sub> é a distância entre as cidades i e j, x<sub>ij</sub> = 1 se a aresta (i,j) está na rota, 0 caso contrário.
          </p>

          {/* Restrições */}
          <h3 className="text-2xl font-semibold mb-4">Restrições:</h3>
          
          <div className="space-y-2">
            <p className="font-mono text-lg">
              ∑<sub>j</sub> x<sub>ij</sub> = 1, ∀i (cada cidade é visitada exatamente uma vez)
            </p>
            <p className="font-mono text-lg">
              ∑<sub>i</sub> x<sub>ij</sub> = 1, ∀j (cada cidade é deixada exatamente uma vez)
            </p>
            <p className="font-mono text-lg">
              ∑<sub>(i,j) ∈ S</sub> x<sub>ij</sub> ≤ |S| - 1, ∀S ⊂ V, |S| ≥ 2 (eliminação de subciclos)
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaixeiroPage;