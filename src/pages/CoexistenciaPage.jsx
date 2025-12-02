import React from 'react';
import image146 from '../assets/imagens/image 146.png';
import image147 from '../assets/imagens/image 147.png';

const CoexistenciaPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top image (pode alternar ou usar um blend das duas) */}
      <div className="w-full bg-black flex justify-center pt-6 pb-4 px-4">
        <div className="max-w-5xl w-full">
          <img
            src={image147}
            alt="Computação clássica e quântica"
            className="w-full object-cover rounded-md shadow-2xl"
          />
        </div>
      </div>

      {/* Bottom content seguindo o mesmo layout */}
      <section className="bg-black text-white px-6 py-10 flex justify-center">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">
          {/* Coluna esquerda: título */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              A Computação Clássica e a Quântica: A Coexistência do Presente com o Futuro Iminente.
            </h1>
          </div>

          {/* Coluna direita: texto */}
          <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-200">
            <p>
              Imagine o alicerce sólido da tecnologia atual e o vislumbre de uma máquina que redefine o
              que é possível. Essa é a jornada da Computação Clássica para a Computação Quântica, duas
              potências com lógicas fundamentalmente diferentes para resolver os maiores desafios do
              nosso tempo.
            </p>
            <p>
              Enquanto a computação clássica trabalha com a precisão dos bits, que representam
              estritamente 0 ou 1, a computação quântica opera com qubits capazes de assumir múltiplos
              estados ao mesmo tempo. Essa diferença permite que problemas antes intratáveis sejam
              explorados de novas maneiras.
            </p>
            <p>
              Em vez de uma substituir a outra, essas duas abordagens se complementam. Sistemas
              clássicos continuam ideais para tarefas estáveis, previsíveis e de alta confiança, enquanto
              os sistemas quânticos surgem como aliados poderosos para problemas de enorme complexidade,
              como otimização em larga escala e simulações avançadas.
            </p>
            <p>
              Essa combinação é essencial para o futuro da computação: utilizamos a robustez do
              processamento clássico como base e exploramos o potencial quântico para dar saltos
              exponenciais em desempenho. A união entre essas duas visões é o ponto de partida para a
              próxima grande revolução tecnológica.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoexistenciaPage;
