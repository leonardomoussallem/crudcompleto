const TaskModel = require('../models/TaskModel');
// Importa o modelo `TaskModel`, que foi definido no arquivo de modelo, para interagir com o MongoDB.
// Este modelo será usado para executar operações como buscar, criar, atualizar e deletar tarefas.

module.exports.getTasks = async (req, res) => {
    // Define a função `getTasks`, que será usada para buscar todas as tarefas.
    // A função é assíncrona, o que significa que utiliza `async/await` para lidar com operações assíncronas, como a consulta ao banco de dados.

    const task = await TaskModel.find();
    // Usa o método `find()` do Mongoose para buscar todos os documentos da coleção de tarefas.
    // O `find()` retorna uma lista de todas as tarefas armazenadas no banco de dados.

    res.send(task);
    // Envia a lista de tarefas obtidas como resposta ao cliente.
};

module.exports.saveTask = (req, res) => {
    // Define a função `saveTask`, que será usada para criar uma nova tarefa.
    // O `req` contém os dados da requisição, e o `res` será usado para enviar a resposta ao cliente.

    const { task } = req.body;
    // Desestrutura o campo `task` do corpo da requisição (`req.body`).
    // Esse campo deve conter o texto da tarefa que o usuário quer criar.

    TaskModel.create({ task })
    // Usa o método `create()` do Mongoose para inserir um novo documento no banco de dados.
    // O documento criado conterá o campo `task` com o valor fornecido pelo usuário.

    .then((data) => {
        // Se a tarefa for salva com sucesso, o `.then()` é executado.
        console.log("Saved Successfully...");
        res.status(201).send(data);
        // Envia uma resposta com status 201 (Created) e os dados da nova tarefa ao cliente.
    })
    .catch((err) => {
        // Se houver algum erro, o `.catch()` será executado.
        console.log(err);
        res.send({ error: err, msg: "Alguma coisa deu errado!" });
        // Envia uma resposta contendo o erro e uma mensagem para o cliente.
    });
};

module.exports.updateTask = (req, res) => {
    // Define a função `updateTask`, que será usada para atualizar uma tarefa existente.

    const { id } = req.params;
    // Extrai o `id` dos parâmetros da URL. O `id` é usado para identificar qual tarefa será atualizada.

    const { task } = req.body;
    // Extrai o campo `task` do corpo da requisição. Este campo conterá o novo valor para a tarefa.

    TaskModel.findByIdAndUpdate(id, { task })
    // Usa o método `findByIdAndUpdate()` do Mongoose para buscar uma tarefa pelo seu `id` e atualizá-la com o novo valor de `task`.
    
    .then(() => res.send("Atualização completa"))
    // Se a atualização for bem-sucedida, envia a mensagem "Atualização completa" ao cliente.
    
    .catch((err) => {
        // Se houver algum erro durante a atualização, executa o bloco `.catch()`.
        console.log(err);
        res.send({ error: err, msg: "Alguma coisa deu errado!" });
        // Envia uma resposta contendo o erro e uma mensagem para o cliente.
    });
};

module.exports.deleteTask = (req, res) => {
    // Define a função `deleteTask`, que será usada para deletar uma tarefa existente.

    const { id } = req.params;
    // Extrai o `id` dos parâmetros da URL. O `id` é usado para identificar qual tarefa será deletada.

    TaskModel.findByIdAndDelete(id)
    // Usa o método `findByIdAndDelete()` do Mongoose para buscar uma tarefa pelo seu `id` e removê-la do banco de dados.
    
    .then(() => res.send("Deletação completa"))
    // Se a deleção for bem-sucedida, envia a mensagem "Deletação completa" ao cliente.
    
    .catch((err) => {
        // Se houver algum erro durante a deleção, executa o bloco `.catch()`.
        console.log(err);
        res.send({ error: err, msg: "Alguma coisa deu errado!" });
        // Envia uma resposta contendo o erro e uma mensagem para o cliente.
    });
};
