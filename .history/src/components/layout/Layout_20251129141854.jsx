import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import backgroundImage from '../../assets/imagens/image 67.png';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background animado só na Home */}
      {isHome && (
        <>
          <div 
            className="fixed inset-0 bg-cover bg-center bg-fixed galaxy-move"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {/* Camada de partículas roxas animadas */}
          <div className="fixed inset-0 particle-wave" />
        </>
      )}
      {/* Overlay escuro: preto sólido nas páginas internas, preto com transparência na Home */}
      <div className={`fixed inset-0 ${isHome ? 'bg-black/70' : 'bg-black'} z-0`} />
      
      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-20">
          <Outlet />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
