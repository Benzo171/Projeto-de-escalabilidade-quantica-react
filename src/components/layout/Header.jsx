import { Link } from 'react-router-dom';
import logoSvg from '../../assets/imagens/Property 1=Default.svg';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="px-6 py-4">
        <Link 
          to="/" 
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300 w-fit"
        >
          <img 
            src={logoSvg} 
            alt="Logo da Accenture" 
            className="w-8 h-8 transition-transform duration-300 hover:scale-110"
          />
          <span className="text-white text-xl font-semibold tracking-wide">
            accenture
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
