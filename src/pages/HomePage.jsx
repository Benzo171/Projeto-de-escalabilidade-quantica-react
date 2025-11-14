// src/pages/HomePage.jsx
import VideoSection from '../components/common/VideoSection';
import FeatureSection from '../components/common/FeatureSection' // Importe o novo componente
import aiImage from '../assets/imagens/image-133.png';
import neurotechImage from '../assets/imagens/image-137.png';
import metaversoImage from '../assets/imagens/image-134.png';
import CategoryButton from '../components/common/CategoryButton';
import roteamentoImage from '../assets/imagens/CARD_ROTEAMENTO.png'; 
import financeiroImage from '../assets/imagens/CARD_FINANCEIRO.png';
import matematicaImage from '../assets/imagens/CARD_MATEMATICA.png';
import exploreImage from '../assets/imagens/image-142.png';
import AnimatedExploreSection from '../components/common/AnimatedExploreSection';
import { Link } from 'react-router-dom';`
`
const HomePage = () => {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className=" flex items-start justify-center px-6 pt-15">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight font-inter">
            <span className="block mb-2 animate-fade-in text-white">
              Computação clássica calcula
            </span>
            <span className="block animate-fade-in animation-delay-500 text-right text-[#7703BA] ">
              a Quântica transforma.
            </span>
          </h1>
        </div>
      </section>

      {/* Video Section */ }
      <VideoSection />

    {/* --- 3. NOVA SEÇÃO (SUBSTITUINDO OS PULL-CARDS) --- */}
      <section className="py-20 mt-35">
        
        {/* Bloco 1: Computação Clássica */}
        <FeatureSection
          imageSide="left"
          image={aiImage}
          title="Computação Clássica: Precisão e Lógica Determinística"
          description="A computação clássica processa informações usando bits, representados por 0 e 1. Essa lógica binária permite resolver tarefas com alta precisão e previsibilidade, ideal para cálculos sequenciais e operações diretas. É a base dos sistemas atuais, garantindo estabilidade, controle e eficiência em rotinas de processamento tradicionais."
          linkTo=""
        />

        {/* Bloco 2: Computação Quântica */}
        <FeatureSection
          imageSide="right"
          image={neurotechImage}
          title="Computação Quântica: Paralelismo e Revolução Tecnológica"
          description="A computação quântica utiliza qubits, capazes de representar 0 e 1 simultaneamente, permitindo processar diversas possibilidades ao mesmo tempo. Essa capacidade oferece ganhos enormes em velocidade e eficiência, especialmente em problemas complexos como otimização de rotas, finanças e simulações. Uma tecnologia em rápido evolução que promete transformar o futuro do processamento de dados."
          linkTo=""
        />

        {/* Bloco 3: Clássica vs Quântica */}
        <FeatureSection
          imageSide="left"
          image={metaversoImage}
          title="Computação Clássica vs Computação Quântica"
          description="Enquanto a computação clássica trabalha com bits (0 ou 1) e oferece estabilidade e precisão em tarefas sequenciais, a computação quântica utiliza qubits, que podem representar 0 e 1 ao mesmo tempo. Isso permite explorar múltiplas soluções simultaneamente, trazendo velocidade e eficiência para desafios complexos. Juntas, representam o equilíbrio entre confiabilidade tradicional e inovação futura."
          linkTo=""
        />

      </section>

      <section className="py-20 text-center "> {/* Mantém o fundo escuro */}
        <div className="container mx-auto px-6 max-w-4xl"> {/* Centraliza e limita a largura */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tudo está conectado!
          </h2>
          <p className="text-xl md:text-2xl text-white-20 leading-relaxed mx-z mb-59">
            Seja para otimizar suas Finanças, entender a lógica por trás da Matemática ou
            desvendar como o Rateamento conecta o mundo, nossos cards são o atalho que
            você precisa. Oferecemos um resumo visual e impactante dos conceitos essenciais
            de cada área.
          </p>
        </div>
{/* --- 3. ADICIONE O NOVO GRID DE BOTÕES AQUI --- */}
          <div className="grid grid-cols1 md:grid-cols-3 gap-89 mt-16 md:mt-24 max-w-2xl mx-auto">
            <CategoryButton
              image={roteamentoImage}
              title="Interger Factorization"
              linkTo="/roteamento" // Link para a página de Roteamento
            />
            <CategoryButton
              image={financeiroImage}
              title="TPS"
              linkTo="/financeiro" // Link para a página de Financeiro
            />
            <CategoryButton
              image={matematicaImage}
              title="Database search"
              linkTo="/matematica" // Link para a página de Matemática
            />
          </div>

      </section>

        
    </div>
  );
};

export default HomePage;