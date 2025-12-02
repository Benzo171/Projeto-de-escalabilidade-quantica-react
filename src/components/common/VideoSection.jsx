import React from 'react';

const VideoSection = () => {
  // -----------------------------------------------------------
  // 1. COLE O LINK DO SEU VÍDEO AQUI:
  // (Aceita: Shorts, Links normais, youtu.be, etc.)
  // -----------------------------------------------------------
  const videoLink = "https://www.youtube.com/watch?v=X8MZWCGgIb8&t=43s"; 

  // Função ultra-robusta para extrair o ID de qualquer tipo de link do YouTube
  const getVideoId = (url) => {
    if (!url) return null;
    
    // Tenta encontrar o padrão de 11 caracteres (ID do YouTube) em vários formatos
    const regExp = /^(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([^#&?]{11})/;
    const match = url.match(regExp);
    
    return match ? match[1] : null;
  };

  // Se a função falhar, usa um ID padrão de segurança
  const videoId = getVideoId(videoLink) || "JhHMJCUmq28";

  return (
    <section className="w-full py-12 px-6 flex justify-center">
      <div className="w-full max-w-5xl">
        {/* Container com aspect ratio 16:9 */}
        <div className="relative w-full pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(124,58,237,0.3)] border border-purple-500/30 bg-gray-900">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            // Mudamos para youtube-nocookie.com para evitar bloqueios de navegador
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
            title="Vídeo sobre Computação Quântica"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;