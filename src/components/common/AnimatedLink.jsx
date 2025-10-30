import { Link } from 'react-router-dom';
import { usePageTransition } from '../../hooks/usePageTransition';

const AnimatedLink = ({ 
  to, 
  children, 
  className = "",
  onClick,
  ...props 
}) => {
  const { transitionTo } = usePageTransition();

  const handleClick = (e) => {
    e.preventDefault();
    
    if (onClick) {
      onClick(e);
    }
    
    transitionTo(to);
  };

  return (
    <Link 
      to={to} 
      onClick={handleClick}
      className={`animated-link ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default AnimatedLink;
