const questoesModels = require("../models/questoesModels");

// GET TODOS
async function listarTodos(req, res) {
  try {
    const questoes = await questoesModels.listarTodos();
    res.status(200).json(questoes);
  } catch (erro) {
    res.status(500).json({
      mensagem: "Não foi possível listar as questões",
      erro: erro.message,
    });
  }
}

// GET POR ID
async function buscarPorId(req, res) {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(404).json({ mensagem: "ID inválido" });
    }

    const questao = await questoesModels.buscarPorId(id);

    if (questao) {
      return res.status(200).json(questao);
    } else {
      return res.status(400).json({ mensagem: "ID não encontrado!" });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao buscar questão por ID",
      erro: erro.message,
    });
  }
}

// POST
async function criar(req, res) {
  try {
    const { topico, enunciado, resposta, linkbib } = req.body;

    if (!topico || !enunciado || !resposta || !linkbib) {
      return res.status(404).json({
        mensagem: "Todos os campos devem ser preenchidos!",
      });
    }

    const novaQuestao = await questoesModels.criar({
      topico,
      enunciado,
      resposta,
      linkbib,
    });

    if (novaQuestao) {
      return res.status(201).json(novaQuestao);
    } else {
      return res
        .status(400)
        .json({ mensagem: "Não foi possível criar a questão!" });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao criar questão",
      erro: erro.message,
    });
  }
}

// PUT
async function atualizar(req, res) {
  try {
    const id = parseInt(req.params.id);
    const { topico, enunciado, resposta, linkbib } = req.body;

    if (isNaN(id)) {
      return res.status(404).json({ mensagem: "ID inválido" });
    }

    if (!topico || !enunciado || !resposta || !linkbib) {
      return res.status(404).json({
        mensagem: "Todos os campos devem ser preenchidos!",
      });
    }

    const questaoAtualizada = await questoesModels.atualizar(id, {
      topico,
      enunciado,
      resposta,
      linkbib,
    });

    if (questaoAtualizada) {
      return res.status(200).json(questaoAtualizada);
    } else {
      return res
        .status(400)
        .json({ mensagem: "Não foi possível encontrar o ID!" });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao atualizar questão",
      erro: erro.message,
    });
  }
}

// DELETE
async function deletar(req, res) {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(404).json({ mensagem: "ID inválido" });
    }

    const deletado = await questoesModels.deletar(id);

    if (deletado) {
      return res
        .status(200)
        .json({ mensagem: "Questão deletada com sucesso!" });
    } else {
      return res.status(400).json({ mensagem: "ID não encontrado!" });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao deletar questão",
      erro: erro.message,
    });
  }
}

module.exports = {
  listarTodos,
  buscarPorId,
  criar,
  atualizar,
  deletar,
};