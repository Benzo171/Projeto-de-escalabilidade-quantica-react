import InfoCard from '../components/common/InfoCard';
import VideoSection from '../components/common/VideoSection';
import ComparisonSection from '../components/common/ComparisonSection';
import quanticaImage from '../assets/imagens/frente-quantica.png';
import classicaImage from '../assets/imagens/Frente-classica.png';

const HomePage = () => {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className=" flex items-start justify-center px-6 pt-32">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight font-inter">
            <span className="block mb-2 animate-fade-in text-white">
              Computação clássica calcula
            </span>
            <span className="block text-white-400 animate-fade-in animation-delay-500 text-right ">
              a quântica transforma.
            </span>
          </h1>
        </div>
      </section>

      {/* Info Boxes Section */}
      <section className="py-45">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <InfoCard
              image={quanticaImage}
              title="Computação Quântica"
              description="Processa informações em qubits, que podem ser 0 e 1 ao mesmo tempo, para resolver problemas complexos."
              linkTo="/quantica"
              className="hover:shadow-2xl hover:shadow-blue-500/20"
            />
            
            <InfoCard
              image={classicaImage}
              title="Computação Clássica"
              description="Processa informações em bits (0 ou 1), com operações determinísticas em sequência."
              linkTo="/classica"
              className="hover:shadow-2xl hover:shadow-green-500/20"
            />

            <InfoCard
              image={classicaImage}
              title="Comparação Detalhada"
              description="Explore as diferenças fundamentais entre as duas abordagens computacionais."
              linkTo="/comparacao"
              className="hover:shadow-2xl hover:shadow-purple-500/20"
            />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Comparison Section */}
      <ComparisonSection />
    </div>
  );
};

export default HomePage;
