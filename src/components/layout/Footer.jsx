import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Seção Sobre Nós */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Sobre Nós</h3>
            <p className="text-gray-300 leading-relaxed">
              Somos uma equipe dedicada a explorar e resolver problemas complexos 
              através de abordagens matemáticas e computacionais inovadoras.
            </p>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>Brasil</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span>contato@accenture.com</span>
              </div>
            </div>
          </div>

          {/* Seção Links Úteis */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-gray-300">

              <li>
                <a 
                  href="https://www.accenture.com/br-pt/support/privacy-policy" 
                  className="hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a 
                  href="https://www.accenture.com/br-pt/support/terms-of-use" 
                  className="hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Termos de Utilização
                </a>
              </li>
              <li>
                <a 
                  href="https://www.accenture.com/br-pt/support/company-cookies-similar-technology" 
                  className="hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cookie Policy/Settings
                </a>
              </li>
              <li>
                <a 
                  href="https://www.accenture.com/br-pt/support/accessibility-statement" 
                  className="hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Declaração de Acessibilidade
                </a>
              </li>
              <li>
                <a 
                  href="https://www.accenture.com/br-pt/about/company-index" 
                  className="hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Código de Conduta - COBE
                </a>
              </li>
              <li>
                <a 
                  href="https://www.accenture.com/br-pt/about/contact-us" 
                  className="hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contato
                </a>
                



              </li>
            </ul>
          </div>
        </div>

        <div
        >
          <h3 className="text-xl font-semibold mb-4">Referência Técnica</h3>
          <li
        >
                  
  <Link 
    to="/fundamentos" 
    className= "hover:text-white transition-colors duration-200 "
  >
    Fundamentos Matemáticos
  </Link>
</li>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2025 Accenture. All Rights Reserved.</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
