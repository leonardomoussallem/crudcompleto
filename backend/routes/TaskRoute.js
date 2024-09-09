const { Router } = require("express"); 
// Importa o objeto `Router` do Express.js. O `Router` permite que você defina rotas de forma modular e organizada.

const { 
    getTasks, 
    saveTask, 
    deleteTask, 
    updateTask 
} = require("../controllers/TaskControllers"); 
// Importa os controladores das funções `getTasks`, `saveTask`, `deleteTask` e `updateTask` que estão localizados no arquivo `TaskControllers`.
// Esses controladores são as funções que irão lidar com as requisições (lógica de cada rota).

const router = Router(); 
// Inicializa uma nova instância do `Router`. Essa instância será usada para definir as rotas da API.


// Define a rota GET para buscar todas as tarefas.
// Quando uma requisição GET for feita para o caminho "/get", a função `getTasks` será executada.
router.get("/get", getTasks);

// Define a rota POST para salvar uma nova tarefa.
// Quando uma requisição POST for feita para o caminho "/save", a função `saveTask` será executada.
router.post("/save", saveTask);

// Define a rota PUT para atualizar uma tarefa específica.
// A rota espera um `id` como parâmetro de URL, que identifica a tarefa a ser atualizada.
// Quando uma requisição PUT for feita para o caminho "/update/:id", a função `updateTask` será executada.
router.put("/update/:id", updateTask);

// Define a rota DELETE para remover uma tarefa específica.
// A rota espera um `id` como parâmetro de URL, que identifica a tarefa a ser deletada.
// Quando uma requisição DELETE for feita para o caminho "/delete/:id", a função `deleteTask` será executada.
router.delete("/delete/:id", deleteTask);

module.exports = router; 
// Exporta o `router` para que ele possa ser utilizado em outros lugares da aplicação (geralmente no arquivo principal, como `app.js` ou `server.js`).
