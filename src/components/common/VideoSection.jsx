const VideoSection = ({ 
  title = "O Futuro da Tecnologia está aqui!", 
  videoId = "SUA_ID_DO_VIDEO",
  className = ""
}) => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen">
      {/* --- BLOCO DO VÍDEO --- */}
      <div className="w-full flex flex-col items-center pt-24 pb-16">
        <h1 className="text-6xl text-center font-bold text-white mb-2">
          O futuro da tecnologia
        </h1>
        <h2 className="text-5xl text-center font-bold text-white mb-12">
          Está Aqui!
        </h2>

        {/* Container reduzido e centralizado do vídeo */}
        <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/SEU_ID_DO_VIDEO?autoplay=1&mute=1&controls=0&loop=1"
            title="Video Background"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
=======
    
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          {title}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe 
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player" 
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
        <div className="max-w-4xl text-4xl text-center mx-auto py-45" >
          <p>A Computação Quântica parece complexa, mas não precisa ser! Neste vídeo, desvendamos de forma simples e direta a ciência por trás dos qubits e como essa tecnologia está a caminho de revolucionar tudo—da inteligência artificial à descoberta de novos materiais.</p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
>>>>>>> parent of dcb4e79 (feat  +fix (Videosection))
