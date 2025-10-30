import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import FundamentosPage from './pages/FundamentosPage';
import CaixeiroPage from './pages/CaixeiroPage';
import QAOAPage from './pages/QAOAPage';
import PortfolioPage from './pages/PortfolioPage';
import ComplexidadePage from './pages/ComplexidadePage';
import AplicacoesPage from './pages/AplicacoesPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="fundamentos" element={<FundamentosPage />} />
          <Route path="caixeiro" element={<CaixeiroPage />} />
          <Route path="qaoa" element={<QAOAPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="complexidade" element={<ComplexidadePage />} />
          <Route path="aplicacoes" element={<AplicacoesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
