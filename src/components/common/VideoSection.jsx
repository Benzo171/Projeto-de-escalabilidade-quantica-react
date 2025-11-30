const VideoSection = ({ 
  title = "O Futuro da Tecnologia está aqui!", 
  videoId = "SUA_ID_DO_VIDEO",
  className = ""
}) => {
  return (
    <div className="min-h-screen ">
      
      {/* --- BLOCO DO VÍDEO (Fica fora do container centralizado) --- */}
      {/* w-full garante largura total. h-[60vh] define a altura como 60% da tela */}
      <div className="w-full h-[70vh] sm:h-[70vh] relative pt-50 ">
        <div><h1 className="text-6xl text-center font-bold text-white mb-2">
            O futuro da tecnologia 
          </h1>

        </div>
        <div><h1 className="text-5xl text-center font-bold text-white mb-20">
            Está Aqui!
          </h1>

        </div>
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
  );
}