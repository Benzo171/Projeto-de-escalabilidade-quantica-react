import React, { useEffect, useRef, useState } from 'react';
import VideoSection from '../components/common/VideoSection';
import FeatureSection from '../components/common/FeatureSection';
import aiImage from '../assets/imagens/image-133.png';
import neurotechImage from '../assets/imagens/image-137.png';
import metaversoImage from '../assets/imagens/image-134.png';
import CategoryButton from '../components/common/CategoryButton';
import roteamentoImage from '../assets/imagens/CARD_ROTEAMENTO.png'; 
import financeiroImage from '../assets/imagens/CARD_FINANCEIRO.png';
import matematicaImage from '../assets/imagens/CARD_MATEMATICA.png';

const HomePage = () => {
  // --- 1. CONFIGURAÇÃO DA ANIMAÇÃO DO TEXTO DO VÍDEO ---
  const [isTextVisible, setIsTextVisible] = useState(false);
  const textRef = useRef(null);

  // --- 2. CONFIGURAÇÃO DA ANIMAÇÃO DO "TUDO ESTÁ CONECTADO" ---
  const [isConnectedVisible, setIsConnectedVisible] = useState(false);
  const connectedRef = useRef(null);

  useEffect(() => {
    // Verifica se tem HASH na URL (ex: #categories-section) ao carregar a página
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500); // Pequeno delay para garantir que a página carregou
      }
    }

    // Observador para o Texto do Vídeo
    const observerText = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true);
          observerText.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    // Observador para a seção "Tudo está Conectado"
    const observerConnected = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsConnectedVisible(true);
          observerConnected.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (textRef.current) observerText.observe(textRef.current);
    if (connectedRef.current) observerConnected.observe(connectedRef.current);

    return () => {
      observerText.disconnect();
      observerConnected.disconnect();
    };
  }, []);

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="flex items-start justify-center px-6 pt-20 lg:pt-32">
        <div className="w-full max-w-none mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight font-inter flex flex-col w-full">
            <span className="block mb-2 animate-fade-in text-white self-start md:ml-10 whitespace-nowrap">
                Computação clássica calcula
            </span>
            <span className="block animate-fade-in animation-delay-500 text-right text-[#7703BA] self-end md:mr-10 whitespace-nowrap">
                a Quântica transforma.
            </span>
            </h1>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* --- TEXTO ANIMADO (TEXTO 1) --- */}
      <div className="py-24 px-6">
        <div 
          ref={textRef} 
          className={`
            max-w-5xl mx-auto text-center 
            transition-all duration-1000 ease-out transform
            ${isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
          `}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-200 leading-relaxed font-inter">
            "A Computação Quântica parece complexa, mas não precisa ser! Neste vídeo, 
            desvendamos de forma simples e direta a ciência por trás dos qubits e como 
            essa tecnologia está a caminho de revolucionar tudo—da inteligência artificial 
            à descoberta de novos materiais."
          </p>
        </div>
      </div>

      {/* --- FEATURE SECTIONS --- */}
      <section className="py-10 mt-10">
        <FeatureSection
          imageSide="left"
          image={aiImage}
          title="Computação Clássica: Precisão e Lógica Determinística"
          description="A computação clássica processa informações usando bits, representados por 0 e 1. Essa lógica binária permite resolver tarefas com alta precisão e previsibilidade, ideal para cálculos sequenciais e operações diretas. É a base dos sistemas atuais, garantindo estabilidade, controle e eficiência em rotinas de processamento tradicionais."
          linkTo="/classica"
        />

        <FeatureSection
          imageSide="right"
          image={neurotechImage}
          title="Computação Quântica: Paralelismo e Revolução Tecnológica"
          description="A computação quântica utiliza qubits, capazes de representar 0 e 1 simultaneamente, permitindo processar diversas possibilidades ao mesmo tempo. Essa capacidade oferece ganhos enormes em velocidade e eficiência, especialmente em problemas complexos como otimização de rotas, finanças e simulações. Uma tecnologia em rápida evolução que promete transformar o futuro do processamento de dados."
          linkTo="/quantica"
        />

        <FeatureSection
          imageSide="left"
          image={metaversoImage}
          title="Computação Clássica vs Computação Quântica"
          description="Enquanto a computação clássica trabalha com bits (0 ou 1) e oferece estabilidade e precisão em tarefas sequenciais, a computação quântica utiliza qubits, que podem representar 0 e 1 ao mesmo tempo. Isso permite explorar múltiplas soluções simultaneamente, trazendo velocidade e eficiência para desafios complexos. Juntas, representam o equilíbrio entre confiabilidade tradicional e inovação futura."
          linkTo="/coexistencia"
        />
      </section>

      {/* --- SEÇÃO "TUDO ESTÁ CONECTADO" --- */}
      <section className="py-24 text-center"> 
        <div 
          ref={connectedRef} 
          className={`
            container mx-auto px-6 max-w-5xl
            transition-all duration-1000 ease-out transform
            ${isConnectedVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
          `}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Tudo está conectado!
          </h2>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed mx-auto mb-20 max-w-4xl">
            Seja para otimizar suas Finanças, entender a lógica por trás da Matemática ou
            desvendar como o Rateamento conecta o mundo, nossos cards são o atalho que
            você precisa. Oferecemos um resumo visual e impactante dos conceitos essenciais
            de cada área.
          </p>
        </div>

        {/* --- GRID DE BOTÕES FLUTUANTES --- */}
        {/* IMPORTANTE: ADICIONEI O ID 'categories-section' AQUI */}
        <div 
            id="categories-section" 
            className="grid grid-cols-1 md:grid-cols-3 gap-11 mt-16 md:mt-24 max-w-6xl mx-auto px-6 scroll-mt-32"
        >
          {/* CARD 1 - Delay 0s */}
          <div className="animate-float" style={{ animationDelay: '0s' }}>
            <CategoryButton
              image={roteamentoImage}
              title="Interger Factorization"
              linkTo="/rsa" 
            />
          </div>

          {/* CARD 2 - Delay 2s */}
          <div className="animate-float" style={{ animationDelay: '2s' }}>
            <CategoryButton
              image={financeiroImage}
              title="TSP"
              linkTo="/roteamento-aereo" 
            />
          </div>

          {/* CARD 3 - Delay 4s */}
          <div className="animate-float" style={{ animationDelay: '4s' }}>
            <CategoryButton
              image={matematicaImage}
              title="Database search"
              linkTo="/database-search" 
            />
          </div>
        </div>

      </section>
    </div>
  );
};

export default HomePage;