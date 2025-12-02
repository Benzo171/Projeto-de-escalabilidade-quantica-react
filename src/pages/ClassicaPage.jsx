import React from 'react';
import image146 from '../assets/imagens/image 146.png';

const ClassicaPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top image */}
      <div className="w-full bg-black flex justify-center pt-6 pb-4 px-4">
        <div className="max-w-5xl w-full">
          <img
            src={image146}
            alt="Computação clássica"
            className="w-full object-cover rounded-md shadow-2xl"
          />
        </div>
      </div>

      {/* Bottom content (similar ao layout do print) */}
      <section className="bg-black text-white px-6 py-10 flex justify-center">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">
          {/* Coluna esquerda: título */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Computação Clássica Ainda é Poderosa na Era Moderna? Descubra os Fatos.
            </h1>
          </div>

          {/* Coluna direita: texto */}
          <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-200">
            <p>
              Se você observar dentro de qualquer computador atual, encontrará bilhões de minúsculos
              transistores alternando entre dois estados &mdash; 0 e 1. Essa é a base da computação
              clássica, o sistema que impulsionou a revolução digital nas últimas décadas.
            </p>
            <p>
              De smartphones a supercomputadores, as máquinas clássicas processam dados usando lógica
              binária, executando operações passo a passo em velocidades impressionantes. Não é à toa
              que esse modelo se tornou essencial para praticamente tudo o que fazemos hoje em termos
              de tecnologia.
            </p>
            <p>
              Porém, à medida que os problemas se tornam mais complexos &mdash; como simulações de alto
              nível, modelos financeiros globais ou otimização em grande escala &mdash; começamos a
              perceber os limites desse tipo de processamento. Certas tarefas exigem tanto tempo e
              recursos que se tornam inviáveis apenas com a computação clássica.
            </p>
            <p>
              Mesmo assim, a computação clássica continua sendo o alicerce da tecnologia moderna. Ela é
              estável, confiável e extremamente eficiente para uma enorme variedade de aplicações.
              Em vez de ser substituída, ela se tornará cada vez mais complementar à computação
              quântica, unindo o melhor dos dois mundos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassicaPage;
