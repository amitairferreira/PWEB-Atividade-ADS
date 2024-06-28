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
