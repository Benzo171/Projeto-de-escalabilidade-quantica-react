import { Link } from 'react-router-dom';
import caixeiroIcon from '../assets/imgs_icones/CaixeiroViajante_icone2.png';
import tspHeldKarpIcon from '../assets/imgs_icones/TSP (Held-Karp).png';
import qpIcon from '../assets/imgs_icones/QP.png';
import qaoaIcon from '../assets/imgs_icones/QAOAO.png';
import vqeIcon from '../assets/imgs_icones/VQE.png';
import quantumIcon from '../assets/imgs_icones/Quantum.png';

const ComplexidadePage = () => {
  const algoritmosClassicos = [
    {
      icon: caixeiroIcon,
      titulo: "TSP (força bruta): O((n-1)!)",
      descricao: "Teste todas as rotas possíveis"
    },
    {
      icon: tspHeldKarpIcon,
      titulo: "TSP (Held-KARP): O(n*2^n)",
      descricao: "Uso de programação dinâmica, ainda caro, mas melhor que força bruta"
    },
    {
      icon: qpIcon,
      titulo: "Portfólio (QP): O(n)³",
      descricao: "Problema de otimização em finanças"
    }
  ];

  const algoritmosQuanticos = [
    {
      icon: qaoaIcon,
      titulo: "QAOA: O(poly(n))",
      descricao: "algoritmo para otimização combinatória"
    },
    {
      icon: vqeIcon,
      titulo: "VQE: O(poly(n))",
      descricao: "Encontra estados de minima energia (química/finanças)"
    },
    {
      icon: quantumIcon,
      titulo: "Quantum Annealing: O(poly(n))",
      descricao: "Inspirado em processos físicos para buscar soluções ótimas"
    }
  ];

  return (
    <div className="min-h-screen text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Botão Voltar */}
        <Link 
          to="/fundamentos" 
          className="inline-block mb-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
        >
          Voltar
        </Link>

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Complexidade Computacional
        </h1>

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Algoritmos Clássicos */}
          <div className="bg-gray-900/50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">Algoritmos Clássicos</h3>
            
            <div className="space-y-6">
              {algoritmosClassicos.map((algoritmo, index) => (
                <div key={index} className="bg-purple-600/40 rounded-xl p-6 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={algoritmo.icon} 
                      alt="Ícone do algoritmo"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold mb-2">{algoritmo.titulo}</p>
                    <p className="text-gray-300 text-sm">{algoritmo.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Algoritmos Quânticos */}
          <div className="bg-gray-900/50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">Algoritmos Quânticos</h3>
            
            <div className="space-y-6">
              {algoritmosQuanticos.map((algoritmo, index) => (
                <div key={index} className="bg-purple-600/40 rounded-xl p-6 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={algoritmo.icon} 
                      alt="Ícone do algoritmo"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold mb-2">{algoritmo.titulo}</p>
                    <p className="text-gray-300 text-sm">{algoritmo.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Texto de Rodapé */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Enquanto algoritmos clássicos ficam inviáveis em larga escala, os quânticos buscam soluções mais eficientes e escaláveis.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ComplexidadePage;
