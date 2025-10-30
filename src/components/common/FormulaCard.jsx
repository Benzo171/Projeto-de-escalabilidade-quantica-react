import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';

const FormulaCard = ({ 
  icon, 
  title, 
  description, 
  linkTo,
  className = ""
}) => {
  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 ${className}`}>
      <div className="text-center space-y-4">
        {/* Ícone */}
        <div className="w-16 h-16 mx-auto mb-4">
          <img 
            src={icon} 
            alt={`Ícone ${title}`}
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Título */}
        <h4 className="text-white text-lg font-semibold leading-tight">
          {title}
        </h4>
        
        {/* Descrição */}
        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Botão */}
        <Button 
          asChild
          className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
        >
          <Link to={linkTo}>
            Ver Fórmula
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default FormulaCard;
