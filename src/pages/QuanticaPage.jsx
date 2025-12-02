import React from 'react';
import image147 from '../assets/imagens/image 147.png';

const QuanticaPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top image */}
      <div className="w-full bg-black flex justify-center pt-6 pb-4 px-4">
        <div className="max-w-5xl w-full">
          <img
            src={image147}
            alt="Computação quântica"
            className="w-full object-cover rounded-md shadow-2xl"
          />
        </div>
      </div>

      {/* Bottom content (igual ao layout do print) */}
      <section className="bg-black text-white px-6 py-10 flex justify-center">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">
          {/* Coluna esquerda: título */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              A Computação Quântica Vai Revolucionar o Futuro da Tecnologia? Entenda Como.
            </h1>
          </div>

          {/* Coluna direita: texto */}
          <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-200">
            <p>
              Imagine um computador capaz de resolver em segundos problemas que levariam milhares de
              anos para uma máquina comum. Essa é a promessa da computação quântica, uma tecnologia que
              usa as leis da física quântica para processar informações de formas completamente novas.
            </p>
            <p>
              Em vez de trabalhar apenas com 0 e 1, como na computação clássica, os qubits podem
              representar vários estados ao mesmo tempo, graças a fenômenos como superposição e
              emaranhamento. Isso permite explorar muitas possibilidades simultaneamente e atacar
              problemas extremamente complexos de maneira muito mais eficiente.
            </p>
            <p>
              Com isso, algoritmos quânticos podem acelerar tarefas como otimização, simulações
              moleculares, análise de risco e busca em grandes bases de dados. Em áreas onde cada ganho
              de desempenho faz diferença, a computação quântica pode representar uma verdadeira
              mudança de paradigma.
            </p>
            <p>
              Apesar de ainda estar em desenvolvimento, essa tecnologia já está moldando o futuro da
              computação. Entender seus princípios hoje é se preparar para as transformações que virão
              nos próximos anos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuanticaPage;
