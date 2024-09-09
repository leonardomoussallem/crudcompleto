# CRUD de Tarefas com Node.js, Express, MongoDB e React

Este é um aplicativo de CRUD (Criar, Ler, Atualizar e Deletar) de tarefas. O back-end foi desenvolvido utilizando **Node.js**, **Express** e **MongoDB**, enquanto o front-end foi desenvolvido em **React.js**. O aplicativo permite que os usuários adicionem, visualizem, editem e excluam tarefas.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express.js**: Framework web para Node.js, usado para criar a API.
- **MongoDB**: Banco de dados NoSQL para armazenar as tarefas.
- **Mongoose**: Biblioteca ODM para interagir com o MongoDB usando modelos.
- **React.js**: Biblioteca JavaScript para a criação do front-end.
- **Axios**: Biblioteca para fazer requisições HTTP no front-end.

## 📋 Funcionalidades

- **Adicionar Tarefas**: Permite criar novas tarefas.
- **Listar Tarefas**: Exibe todas as tarefas armazenadas no banco de dados.
- **Atualizar Tarefas**: Permite editar tarefas existentes.
- **Deletar Tarefas**: Remove tarefas do banco de dados.

## 🛠 Requisitos

- [Node.js](https://nodejs.org/) (versão 12+)
- [MongoDB](https://www.mongodb.com/) (local ou serviço online como MongoDB Atlas)

## 🔧 Como Rodar o Projeto

```bash
### 1. Clone o repositório


git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

### 2. Instale as Dependências do Back-end
Navegue até a pasta do servidor e instale as dependências:

### 3. Configure o MongoDB
MongoDB Local: Certifique-se de que o serviço do MongoDB está ativo.
MongoDB Atlas: Crie um banco de dados e obtenha a URL de conexão.

Crie um arquivo .env na pasta server e adicione a string de conexão do MongoDB:

MONGO_URL=mongodb://localhost:27017/nome-do-seu-banco-de-dados

### 4. Rodar o Servidor Back-end
Inicie o servidor Express com o comando: npm start
O servidor estará rodando por padrão em http://localhost:5000.

### 5. Instale as Dependências do Front-end
Abra uma nova aba no terminal, navegue até a pasta client e instale as dependências:
cd ../client
npm install

### 6. Rodar o Front-end
Inicie o aplicativo React com o comando: npm start

### 7. Interagir com a Aplicação
Abra o navegador e acesse http://localhost:3000.
Adicione, visualize, edite e delete tarefas conforme necessário.

📂 Estrutura do Projeto
Back-end (server)
models/TaskModel.js: Define o esquema da tarefa usando Mongoose.
controllers/TaskControllers.js: Contém a lógica para criar, ler, atualizar e deletar tarefas.
routes/taskRoutes.js: Define as rotas da API para as operações de CRUD.
app.js: Arquivo principal do servidor Express que conecta as rotas e configura o servidor.
Front-end (client)
components/List.js: Componente responsável por renderizar a lista de tarefas e gerenciar as ações de editar e deletar.
App.js: Componente principal do React, onde a lógica de criar, atualizar e listar as tarefas está implementada.
📬 Endpoints da API
GET /api/get: Busca todas as tarefas do banco de dados.
POST /api/save: Cria uma nova tarefa.
PUT /api/update/:id: Atualiza uma tarefa existente pelo seu ID.
DELETE /api/delete/:id: Remove uma tarefa existente pelo seu ID.
⚠️ Possíveis Problemas
Erro ERR_CONNECTION_REFUSED no Front-end: Isso pode ocorrer se o servidor back-end não estiver rodando. Verifique se o servidor está iniciado corretamente na porta 5000.

Problemas de CORS: Se você estiver rodando o back-end e o front-end em diferentes portas, pode ocorrer um problema de CORS. Adicione o middleware de CORS no servidor Express:
const cors = require('cors');
app.use(cors());


MongoDB não conectado: Verifique a string de conexão do MongoDB no arquivo .env. Certifique-se de que o serviço MongoDB está ativo.

🛠 Decisões Tomadas no Desenvolvimento
1. Escolha da Stack Tecnológica
Optamos por utilizar Node.js e Express no back-end devido à sua eficiência e popularidade na criação de APIs RESTful. MongoDB foi escolhido como banco de dados NoSQL pela sua flexibilidade em armazenar dados em formato de documentos, o que se alinha bem com a estrutura de tarefas. No front-end, React.js foi selecionado pela sua capacidade de criar interfaces de usuário dinâmicas e reativas de forma modular.

2. Modelagem de Dados com Mongoose
A utilização de Mongoose permite a definição de esquemas claros para os dados, garantindo consistência e facilitando operações de banco de dados. Definimos o modelo da tarefa com um único campo obrigatório task do tipo string:
const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  }
});

3. Estrutura de Pastas Organizada
Mantivemos uma separação clara entre o back-end e o front-end, facilitando a manutenção e escalabilidade do projeto. Cada parte do projeto possui suas próprias dependências e configurações.

4. Comunicação com Axios
No front-end, utilizamos Axios para realizar requisições HTTP para a API. Axios foi escolhido por sua simplicidade e facilidade de uso em comparação com outras bibliotecas como o fetch.

5. Gerenciamento de Estado com Hooks do React
Utilizamos React Hooks como useState e useEffect para gerenciar o estado da aplicação e realizar efeitos colaterais, como a busca de dados do servidor. Isso simplifica o código e melhora a legibilidade.
useEffect(() => {
  axios.get(`${baseURL}/get`).then((res) => {
    setTasks(res.data);
  });
}, [updateUI]);

6. Tratamento de Erros Robusto
Implementamos tratamento de erros tanto no front-end quanto no back-end para garantir que falhas nas operações sejam devidamente comunicadas ao usuário. No back-end, erros nas operações de banco de dados retornam mensagens claras e status apropriados.
TaskModel.create({ task })
  .then((data) => res.status(201).send(data))
  .catch((err) => res.send({ error: err, msg: "Alguma coisa deu errado!" }));

7. Componentização do Front-end
Dividimos a interface em componentes reutilizáveis, como o componente List.js para a lista de tarefas, o que torna o código mais organizado e fácil de manter.

🤝 Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias e novas funcionalidades.

📝 Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.


