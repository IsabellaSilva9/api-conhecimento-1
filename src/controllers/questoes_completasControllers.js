const topicosModels = require("../models/quesotes_completasModels");

async function listar(req, res) {
const { id } = req.query;

// Se passar ID → busca por ID
if (id) {
const topico = await topicosModels.buscarPorId(id);

if (topico) {
return res.status(200).json(topico);
} else {
return res.status(404).json({ mensagem: "ID não encontrado" });
}
}

// Se não passar nada → lista todos
const topicos = await topicosModels.listarTodos();
res.status(200).json(topicos);
}

module.exports = { listar };