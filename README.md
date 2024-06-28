# Programação para web - ADS
A atividade consiste na definição de uma API para gerenciar informações sobre alimentos em um sistema de estoque, aplicando habilidades de criação de APIs RESTful, manipulação de dados em um banco de dados NoSQL e framework Express.
## Estrutura do projeto
O projeto está organizado em camadas para facilitar a manutenção e a escalabilidade:

- controllers/: Contém os controladores que lidam com as requisições HTTP.
- models/: Define os esquemas de dados e interage diretamente com o MongoDB usando Mongoose.
- routes/: Define as rotas da API e as associa aos controladores correspondentes.
- services/: Contém a lógica de negócio e interage com os modelos para manipulação de dados.
- app.js: Arquivo principal da aplicação onde o Express é configurado, as rotas são integradas e a conexão com o MongoDB é estabelecida.
- server.js: Configuração do servidor.

## Tecnologias utilizadas
- Node.js: Ambiente de execução JavaScript no servidor.
- Express: Framework web para Node.js.
- MongoDB: Banco de dados NoSQL.
- Mongoose: ODM (Object Data Modeling) para MongoDB e Node.js.

## Pré-requisitos
- Node.js instalado.
- MongoDB instalado ou uma conta no MongoDB Atlas.

## Funcionalidades da API
A API gerencia os dados de alimentos em um sistema de estoque.

`(GET): /api/foods - Lista todos os alimentos cadastrados.`

`(GET): /api/foods/:id - Retorna um alimento específico de acordo com seu respectivo id.`

`(POST): /api/foods - Cadastra um novo alimento.`

`(PUT): /api/foods/:id - Atualiza as informações cadastradas.`

`(DELETE): /api/foods/:id - Remove o alimento.`

## Instalação
1. Clone o repositório
   ```bash
   git clone https://github.com/amitairferreira/PWEB-Atividade-ADS.git
    ```
2. Entre na pasta do projeto e instale as dependências
   ```bash
   npm install
    ```
3. Na pasta raiz do projeto renomeie .env.example para .env e adicione as variáveis. Em seguida, execute o servidor no terminal
   ```bash
   npm run dev
    ```
