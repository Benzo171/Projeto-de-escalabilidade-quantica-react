// src/components/layout/Footer.jsx

import { Link } from 'react-router-dom';
import suaImagem from '../../assets/imagens/image-141.png'; 

const Footer = () => {
  return (
    // MUDANÇA 1: Diminuí o padding vertical geral de py-12 para py-8
    <footer className="bg-black text-white py-12   mt-auto">
      <div className="container mx-10 px-1">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Coluna 1: Sobre Nós (Ocupa 3 colunas) */}
          <div className="space-y-4 md:col-span-3">
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

          {/* Coluna 2: Links Úteis (Ocupa 3 colunas) */}
          <div className="space-y-4 md:col-span-3">
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

          {/* Coluna 3: Referência Técnica (Ocupa 2 colunas) */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Referência Técnica</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link 
                  to="/fundamentos" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Fundamentos Matemáticos
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: IMAGEM (Ocupa 4 colunas) */}
          {/* MUDANÇA 2: Removi 'h-full' e adicionei 'max-h-40' (160px)
              Isso impede a imagem de esticar o footer para baixo.
          */}
          <div className="md:col-span-4 relative">
            <img 
              src={suaImagem} 
              alt="Descrição da imagem" 
              className="absolute w-960 h-100 top-1/2 -translate-y-1/3 mx-30 rounded-md" // Pode usar object-contain se preferir
            />
          </div>

        </div>

        {/* Copyright */}
        {/* MUDANÇA 3: Diminuí o espaço de 'mt-8 pt-6' para 'mt-6 pt-4' */}
        <div className="  mt-20 pt-4 text-left text-gray-400">
          <p>&copy; 2025 Accenture. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;