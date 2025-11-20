import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import FundamentosPage from './FundamentosPage';
import CaixeiroPage from './CaixeiroPage';
import QAOAPage from './QAOAPage';
import ComplexidadePage from './ComplexidadePage';
import PortfolioPage from './PortfolioPage';
import './transitions.css'; // Arquivo CSS para as transições

const App = () => {
  return (
    <Router>
      <TransitionWrapper />
    </Router>
  );
};

const TransitionWrapper = () => {
  const location = useLocation();

  // Mapeamento de rotas para determinar a direção da transição
  // FundamentosPage é o "pai" ou ponto de partida (index 0)
  // As outras páginas são "filhas" (index 1)
  const routeOrder = {
    '/fundamentos': 0,
    '/caixeiro': 1,
    '/qaoa': 1,
    '/portfolio': 1, // Assumindo que existe
    '/complexidade': 1,
  };

  // Lógica simples para determinar a direção:
  // Se a nova rota tem um índice maior, é 'forward' (entrada)
  // Se a nova rota tem um índice menor, é 'back' (saída/retorno)
  // Como Fundamentos é 0 e as outras são 1, a transição de Fundamentos para qualquer outra é 'forward', e o retorno é 'back'.
  const currentPathIndex = routeOrder[location.pathname] || 0;
  const previousPathIndex = React.useRef(currentPathIndex);
  
  let classNames = 'page-transition-forward';
  if (currentPathIndex < previousPathIndex.current) {
    classNames = 'page-transition-back';
  }
  previousPathIndex.current = currentPathIndex;


  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        timeout={500} // Duração da transição em ms
        classNames={classNames}
      >
        <div className="route-section">
          <Routes location={location}>
            <Route path="/fundamentos" element={<FundamentosPage />} />
            <Route path="/caixeiro" element={<CaixeiroPage />} />
            <Route path="/qaoa" element={<QAOAPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/complexidade" element={<ComplexidadePage />} />
            {/* Adicionar outras rotas aqui */}
            <Route path="/" element={<FundamentosPage />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;

// Nota: Os componentes FundamentosPage, CaixeiroPage, QAOAPage e ComplexidadePage
// devem ser renomeados para .js e importados corretamente.
// O arquivo FundamentosPage.js será modificado para remover a lógica de navegação interna
// e usar a navegação padrão do React Router.