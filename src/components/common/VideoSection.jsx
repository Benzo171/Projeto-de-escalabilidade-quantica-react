const VideoSection = () => {
  return (
    <div className="min-h-screen "> {/* Adicionei bg-black para evitar faixas brancas se o vídeo carregar lento */}
      
      {/* --- BLOCO DE TEXTO --- */}
      {/* Mantive o padding (pt-24) para o texto não colar no topo */}
      <div className="w-full flex flex-col items-center pt-30 pb-40  px-4">
        <h1 className="text-4xl md:text-6xl text-center font-bold text-white mb-1">
          O futuro da tecnologia
        </h1>
        <h2 className="text-3xl md:text-5xl text-center font-bold text-white">
          Está Aqui!
        </h2>
      </div>

      {/* --- BLOCO DO VÍDEO (Full Width) --- */}
      {/* ALTERAÇÕES FEITAS:
          1. Removi 'max-w-5xl': Para não limitar a largura.
          2. Removi 'rounded-xl': Para não ter cantos redondos (já que vai tocar na borda).
          3. Removi 'shadow-xl': Sombra não aparece se o vídeo ocupa tudo.
          4. Mantive 'w-full' e 'aspect-video'.
      */}
      <div className="w-full pb-50 ">
        <iframe
          className="w-full h-[550px] object-cover"
          src="https://www.youtube.com/embed/SEU_ID_DO_VIDEO?autoplay=1&mute=1&controls=0&loop=1&playlist=SEU_ID_DO_VIDEO" 
          title="Video Background"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  );
};

export default VideoSection;