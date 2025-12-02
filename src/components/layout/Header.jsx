// src/components/common/Header.jsx
import { Link } from 'react-router-dom';
import logoSvg from '../../assets/imagens/Property 1=Default.svg';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="px-6 py-6">
        <Link 
          to="/" 
          className="group flex items-center gap-4 w-fit cursor-pointer p-2 relative"
        >
          {/* LOGO */}
          <img 
            src={logoSvg} 
            alt="Logo da Accenture" 
            // AJUSTES:
            // translate-x-32: Mantive (ou aumentei levemente) a distância horizontal, já que você gostou.
            // -translate-y-2: Reduzi drásticamente a subida (antes estava 12). Agora sobe bem pouco.
            // scale-50: Continua diminuindo pela metade.
            className="w-12 h-12 transition-all duration-700 ease-out z-10
                       group-hover:translate-x-29 
                       group-hover:-translate-y-6
                       group-hover:scale-50"
          />
          
          {/* TEXTO ACCENTURE */}
          <span 
            className="text-white text-3xl font-bold tracking-wide
                       transition-all duration-700 ease-out absolute left-14
                       
                       /* ESTADO PADRÃO */
                       opacity-0 
                       translate-y-8
                       
                       /* ESTADO HOVER */
                       group-hover:opacity-100 
                       group-hover:translate-y-0"
          >
            accenture
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;