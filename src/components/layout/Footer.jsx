import { Link } from 'react-router-dom';
import suaImagem from '../../assets/imagens/image-141.png'; 

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-auto border-t border-purple-900/30">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Grid Principal: 3 Colunas Claras e Espaçadas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* COLUNA 1: SOBRE NÓS */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-purple-400">Sobre Nós</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Somos uma equipe dedicada a explorar e resolver problemas complexos 
              através de abordagens matemáticas e computacionais inovadoras.
            </p>
            
            {/* Informações de Contato */}
            <div className="pt-4 space-y-2">
              <div className="flex items-center gap-3 text-gray-400 text-lg">
                <span className="text-xl">📍</span>
                <span>Brasil</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-lg">
                <span className="text-xl">✉️</span>
                <a href="mailto:contato@accenture.com" className="hover:text-purple-300 transition-colors">
                  contato@accenture.com
                </a>
              </div>
            </div>
          </div>

          {/* COLUNA 2: LINKS ÚTEIS (Centralizada no Desktop) */}
          <div className="space-y-4 lg:pl-10">
            <h3 className="text-2xl font-bold text-purple-400">Links Úteis</h3>
            <ul className="space-y-3 text-lg text-gray-300">
              <li>
                <a href="https://www.accenture.com/br-pt/support/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="https://www.accenture.com/br-pt/support/terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                  Termos de Utilização
                </a>
              </li>
              <li>
                <a href="https://www.accenture.com/br-pt/about/contact-us" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                  Fale Conosco
                </a>
              </li>
              <li>
                <a href="https://www.accenture.com/br-pt/about/company-index" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                  Código de Conduta
                </a>
              </li>
            </ul>
          </div>

          {/* COLUNA 3: TÉCNICA E IMAGEM (Alinhada à Direita) */}
          <div className="flex flex-col items-start lg:items-end space-y-6">
            
            {/* Link Técnico Destacado */}
            <div className="text-left lg:text-right">
               <h3 className="text-2xl font-bold text-purple-400 mb-2">Área Técnica</h3>
               <Link 
                  to="/fundamentos" 
                  className="text-lg text-gray-300 hover:text-white border-b-2 border-transparent hover:border-purple-500 transition-all pb-1"
                >
                  Fundamentos Matemáticos →
                </Link>
            </div>

            {/* Imagem (Sem posicionamento absoluto complicado) */}
          
          </div>

        </div>

        {/* Rodapé do Rodapé (Copyright) */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2025 Accenture. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Inovação e Tecnologia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;