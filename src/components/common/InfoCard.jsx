import { Link } from 'react-router-dom';

const InfoCard = ({ 
  image, 
  title, 
  description, 
  linkTo = "#", 
  linkText = "saiba mais >",
  className = ""
}) => {
  return (
    <div className={`group relative overflow-hidden rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 h-96 ${className}`}>
      {/* Imagem */}
      <div className="h-full overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay com conteúdo */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-200 text-sm mb-4 leading-relaxed">
            {description}
          </p>
          <Link 
            to={linkTo}
            className="inline-block text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
          >
            {linkText}
          </Link>
        </div>
      </div>
      
      {/* Título sempre visível (fallback) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default InfoCard;
