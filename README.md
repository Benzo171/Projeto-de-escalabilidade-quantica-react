# Projeto-de-escalabilidade-quantica-react
🚀 Comparação de Escalabilidade Quântica vs. Clássica (Simulação Interativa)
Este projeto é uma página web interativa projetada para ilustrar o ganho de eficiência da computação quântica (simulada) em comparação com as soluções clássicas para problemas de otimização combinatória, como o Problema do Caixeiro Viajante (TSP) ou Roteamento Aéreo.

A aplicação combina explicações conceituais com elementos gráficos e simulações interativas para demonstrar visualmente a diferença brutal nas curvas de complexidade algorítmica.

✨ Funcionalidades Principais
Simulação de Rotas Genéricas: O primeiro gráfico interativo permite adicionar aeroportos (N genérico) e visualiza a rede de conexões, ilustrando o rápido crescimento das possibilidades.

Comparação de Complexidade (O(N!) vs. O(N³)): Gráficos de barras e de linha (escala logarítmica) mostram o número de passos computacionais necessários para algoritmos clássicos (fatorial) versus a escalabilidade melhorada (simulada como cúbica ou logarítmica) de uma solução quântica.

Estudo de Caso Prático (RMR): Um segundo painel de simulação focado em um caso real (Cidades da Região Metropolitana do Recife - RMR) demonstra a aplicação do roteamento em um contexto geográfico definido.

Design Dark Mode: Interface moderna e otimizada com Tailwind CSS, utilizando um esquema de cores escuro (roxo e cinza) que facilita a visualização dos gráficos e dados.

⚙️ Tecnologias Utilizadas
O projeto é construído como uma Single Page Application (SPA) usando as seguintes tecnologias:

React: Biblioteca JavaScript para construção da interface de usuário.

JavaScript: Linguagem principal do projeto.

Chart.js (com react-chartjs-2): Utilizada para renderizar os gráficos de barras e de linhas, essenciais para a visualização da complexidade.

Tailwind CSS: Framework CSS utility-first para estilização rápida e responsiva.

HTML5/CSS3

🛠️ Pré-requisitos
Para executar este projeto em sua máquina local, você precisará ter o Node.js e o npm (ou yarn) instalados.

Node.js: Versão 18 ou superior

npm: Versão 8 ou superior (ou Yarn)

Você pode verificar suas versões no terminal:

Bash

node -v
npm -v
📦 Instalação e Execução
Siga os passos abaixo para baixar o código-fonte e iniciar o servidor de desenvolvimento.

Passo 1: Clone o Repositório
Bash

# Assumindo que você está usando Git, substitua pela URL do seu repositório
git clone [SUA_URL_DO_REPOSITORIO]
cd [NOME_DA_PASTA]


Passo 2: Instale as Dependências
No diretório raiz do projeto, instale todas as dependências listadas no package.json.

Bash

npm install

npm run dev
# OU
yarn install


Passo 3: Adicione as Imagens (Opcional)
Se você estiver usando imagens de mapa (como mapa_mundi_escuro.png e image 66.png) no diretório src/assets/imagens/, certifique-se de que elas estão presentes ou aponte as constantes BACKGROUND_IMAGE_URL e WORLD_MAP_IMAGE_URL no RoteamentoAereo.jsx para os seus próprios arquivos.

Passo 4: Inicie o Servidor de Desenvolvimento
Execute o comando de inicialização do React/Vite.

Bash

npm start
# OU (se for um projeto Vite)
npm run dev
Passo 5: Acesse a Aplicação
A aplicação será aberta automaticamente no seu navegador, geralmente em http://localhost:3000 ou http://localhost:5173.

Você pode começar a interagir com os seletores de aeroportos e o estudo de caso da RMR para visualizar a comparação de escalabilidade.
