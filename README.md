CRUD de Tarefas com Node.js, Express, MongoDB e React
Este é um aplicativo de CRUD (Criar, Ler, Atualizar e Deletar) de tarefas. O back-end foi desenvolvido utilizando Node.js, Express e MongoDB, enquanto o front-end foi desenvolvido em React.js. O aplicativo permite que os usuários adicionem, visualizem, editem e excluam tarefas.

Tecnologias Utilizadas
Node.js: Ambiente de execução para o JavaScript no servidor.
Express.js: Framework web para Node.js, usado para criar a API.
MongoDB: Banco de dados NoSQL para armazenar as tarefas.
Mongoose: Biblioteca ODM para interagir com o MongoDB usando modelos.
React.js: Biblioteca JavaScript para a criação do front-end.
Axios: Biblioteca para fazer requisições HTTP no front-end.
Funcionalidades
Adicionar Tarefas: Permite criar novas tarefas.
Listar Tarefas: Exibe todas as tarefas armazenadas no banco de dados.
Atualizar Tarefas: Permite editar tarefas existentes.
Deletar Tarefas: Remove tarefas do banco de dados.
Requisitos
Node.js (versão 12+)
MongoDB (local ou serviço online como MongoDB Atlas)
Como Rodar o Projeto
1. Clone o repositório
bash
Copiar código
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
2. Instale as dependências do Back-end
Navegue até a pasta do servidor e instale as dependências usando o npm (ou yarn):

bash
Copiar código
cd server
npm install
3. Configure o MongoDB
Se estiver usando o MongoDB local, inicie o serviço do MongoDB.
Se estiver usando o MongoDB Atlas, crie um banco de dados e obtenha a URL de conexão.
Crie um arquivo .env na pasta server e adicione a string de conexão do MongoDB:

bash
Copiar código
MONGO_URL=mongodb://localhost:27017/nome-do-seu-banco-de-dados
4. Rodar o Servidor Back-end
Inicie o servidor Express no ambiente de desenvolvimento:

bash
Copiar código
npm start
Por padrão, o servidor estará rodando em http://localhost:5000.

5. Instale as dependências do Front-end
Agora, navegue até a pasta client (onde está o projeto React) e instale as dependências:

bash
Copiar código
cd ../client
npm install
6. Rodar o Front-end
Para iniciar o aplicativo React no modo de desenvolvimento, use o seguinte comando:

bash
Copiar código
npm start
Por padrão, o front-end estará rodando em http://localhost:3000.

7. Interagindo com a Aplicação
Abra o navegador e acesse http://localhost:3000.
Você poderá criar novas tarefas, visualizar a lista de tarefas, editar e deletar.
Estrutura do Projeto
Back-end (server)
models/TaskModel.js: Define o esquema da tarefa usando Mongoose.
controllers/TaskControllers.js: Contém a lógica para lidar com as requisições de criar, ler, atualizar e deletar tarefas.
routes/taskRoutes.js: Define as rotas da API para as operações de CRUD.
app.js: Arquivo principal do servidor Express que conecta as rotas e configura o servidor.
Front-end (client)
components/List.js: Componente responsável por renderizar a lista de tarefas e gerenciar as ações de editar e deletar.
App.js: Componente principal do React, onde a lógica de criar, atualizar e listar as tarefas está implementada.
Endpoints da API
GET /api/get: Busca todas as tarefas do banco de dados.
POST /api/save: Cria uma nova tarefa.
PUT /api/update/:id: Atualiza uma tarefa existente.
DELETE /api/delete/:id: Remove uma tarefa existente.
Possíveis Problemas
Erro ERR_CONNECTION_REFUSED no Front-end: Isso pode ocorrer se o servidor back-end não estiver rodando. Verifique se o servidor está iniciado corretamente na porta 5000.

Problemas de CORS: Se você estiver rodando o back-end e o front-end em diferentes portas, pode ocorrer um problema de CORS. Adicione o middleware de CORS no servidor Express:

javascript
Copiar código
const cors = require('cors');
app.use(cors());
MongoDB não conectado: Verifique a string de conexão do MongoDB no arquivo .env. Certifique-se de que o serviço MongoDB está ativo.

Contribuição
Sinta-se à vontade para enviar pull requests e sugerir melhorias!

Licença
Este projeto está licenciado sob a licença MIT.
