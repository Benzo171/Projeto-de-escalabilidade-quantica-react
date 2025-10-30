# Escalabilidade Quântica - Aplicação React

Uma aplicação React moderna sobre computação quântica vs clássica, convertida de HTML/CSS/JS para React com melhorias significativas em design, performance e manutenibilidade.

## 🚀 Características

### Páginas Implementadas
- **Página Inicial**: Hero section com navegação interativa
- **Fundamentos Matemáticos**: Grid de conceitos com fórmulas
- **Algoritmo QAOA**: Explicações detalhadas com visualizações
- **Problema do Caixeiro Viajante**: Visualização animada do TSP
- **Otimização de Portfólio**: Gráficos financeiros e comparações
- **Aplicações**: Cases de uso da computação quântica
- **Complexidade Computacional**: Diagramas e análises comparativas

### Tecnologias Utilizadas
- **React 18** com hooks modernos
- **React Router v6** para navegação
- **Tailwind CSS** para estilização responsiva
- **Lucide React** para ícones modernos
- **Vite** como build tool
- **Shadcn/UI** para componentes base

### Funcionalidades
- Design responsivo e moderno
- Animações suaves e transições
- Navegação fluida entre páginas
- Hover effects e micro-interações
- Background dinâmico com overlay
- Componentes reutilizáveis
- Código limpo e bem estruturado

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### Instalação
```bash
# Clonar o repositório
git clone <repository-url>
cd escalabilidade-quantica

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Preview da build
pnpm run preview
```

### Scripts Disponíveis
- `pnpm run dev` - Servidor de desenvolvimento
- `pnpm run build` - Build para produção
- `pnpm run preview` - Preview da build
- `pnpm run lint` - Verificação de código

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout
│   ├── common/          # Componentes reutilizáveis
│   └── ui/              # Componentes base (Shadcn/UI)
├── pages/               # Páginas da aplicação
├── hooks/               # Hooks customizados
├── assets/              # Imagens, ícones, vídeos
├── App.jsx              # Componente principal
└── main.jsx             # Ponto de entrada
```

## 🎨 Design System

### Cores Principais
- **Background**: Gradiente escuro com overlay
- **Primária**: Azul (#3b82f6)
- **Secundária**: Roxo (#8b5cf6)
- **Accent**: Verde (#10b981)
- **Texto**: Branco e tons de cinza

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Títulos**: Font-weight 700
- **Corpo**: Font-weight 400
- **Código**: Font-family mono

### Componentes
- Cards com backdrop-blur e bordas sutis
- Botões com gradientes e hover effects
- Navegação com transições suaves
- Ícones consistentes (Lucide React)

## 🔧 Componentes Principais

### Layout
- **Header**: Logo da Accenture com navegação
- **Footer**: Links úteis e informações da empresa
- **Layout**: Wrapper principal com background

### Páginas
- **HomePage**: Página inicial com hero e navegação
- **FundamentosPage**: Grid de conceitos matemáticos
- **QAOAPage**: Algoritmo quântico detalhado
- **CaixeiroPage**: Problema TSP com visualização
- **PortfolioPage**: Otimização financeira
- **AplicacoesPage**: Cases de uso práticos
- **ComplexidadePage**: Análise de complexidade

### Componentes Reutilizáveis
- **InfoCard**: Cards de informação com overlay
- **FormulaCard**: Cards para fórmulas matemáticas
- **VideoSection**: Seção de vídeo responsiva
- **ComparisonSection**: Navegação com botões esféricos
- **AnimatedLink**: Links com transições

## 🚀 Deploy

### Netlify
```bash
# Build da aplicação
pnpm run build

# Deploy manual ou conectar repositório
```

### Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Servidor Próprio
```bash
# Build da aplicação
pnpm run build

# Servir arquivos da pasta dist/
```

## 📱 Responsividade

A aplicação é totalmente responsiva com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Utiliza grid system flexível e componentes adaptativos.

## ⚡ Performance

### Otimizações Implementadas
- Componentes otimizados com React.memo quando necessário
- Lazy loading preparado para imagens
- CSS otimizado com Tailwind
- Build otimizada com Vite
- Assets comprimidos

### Métricas Esperadas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

## 🔍 SEO e Acessibilidade

### SEO
- Meta tags apropriadas
- Títulos semânticos (h1, h2, h3)
- Alt text em imagens
- URLs semânticas

### Acessibilidade
- Navegação por teclado
- Contraste adequado (WCAG AA)
- Screen reader friendly
- Focus indicators visíveis

## 🤝 Contribuição

Para contribuir com o projeto:

1. Fork o repositório
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👥 Equipe

Desenvolvido pela equipe de Escalabilidade Quântica da Accenture.

---

**Nota**: Esta aplicação demonstra conceitos avançados de computação quântica e otimização, servindo como ferramenta educacional e showcase tecnológico.
