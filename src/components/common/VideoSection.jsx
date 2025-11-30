export default function Home() {
  return (
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
