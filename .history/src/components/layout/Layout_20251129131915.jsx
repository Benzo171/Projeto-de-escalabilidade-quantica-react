import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import backgroundImage from '../../assets/imagens/image 66.png';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background com overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-fixed galaxy-move"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {/* Camada de partículas roxas animadas */}
      <div className="fixed inset-0 particle-wave" />
      {/* Overlay escuro para manter contraste do conteúdo */}
      <div className="fixed inset-0 bg-black/70 z-0" />
      
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
