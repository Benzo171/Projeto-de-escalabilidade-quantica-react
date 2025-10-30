import AnimatedLink from './AnimatedLink';

const ComparisonSection = () => {
  const sphereButtons = [
    {
      title: "Problema de Roteamento",
      to: "#" // Link placeholder já que essa página não existe
    },
    {
      title: "Escabalidade Financeira", 
      to: "#" // Link placeholder já que essa página não existe
    },
    {
      title: "Roteamento aéreo",
      to: "#" // Link placeholder já que essa página não existe
    }
  ];

  return (
    <section className="comparison-section" id="comparacao">
      {/* Título fixo no fundo */}
      <h2 className="comparison-title">
        Comparação <br />
        de Abordagens
      </h2>
      
      {/* Container dos botões */}
      <div className="spheres-container">
        {sphereButtons.map((button, index) => (
          <AnimatedLink
            key={index}
            to={button.to}
            className="sphere-button"
          >
            {button.title}
          </AnimatedLink>
        ))}
      </div>
    </section>
  );
};

export default ComparisonSection;
