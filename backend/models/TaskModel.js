const mongoose = require("mongoose"); 
// Importa o `mongoose`, que é uma biblioteca ODM (Object Data Modeling) para MongoDB e Node.js.
// O Mongoose facilita o processo de definir esquemas para os documentos no MongoDB e interagir com o banco de dados.

const taskSchema = new mongoose.Schema({
  // Define o esquema (estrutura) para a coleção de tarefas (tasks).
  
  task: { 
    // Define o campo `task`, que representa o texto ou descrição da tarefa.
    
    type: String, 
    // Especifica que o tipo do campo `task` é `String` (ou seja, texto).
    
    required: true 
    // Define que este campo é obrigatório. Isso significa que não pode existir um documento no banco de dados sem um valor para `task`.
  }
});

module.exports = mongoose.model("Task", taskSchema); 
// Exporta um modelo chamado "Task", que será baseado no `taskSchema`.
// O `mongoose.model` cria um modelo que permite interagir com o MongoDB para realizar operações como criar, ler, atualizar e excluir documentos baseados nesse esquema.
// O nome "Task" será o nome da coleção no MongoDB (no plural, será armazenada como `tasks`).
