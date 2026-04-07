const topicosModels = require("../models/topicosModels");

async function listarTodos(req, res) {
  try {
    const topicos = await topicosModels.listarTodos();
    res.status(200).json(topicos);
  } catch (erro) {
    res.status(500).json({
      mensagem: "Não foi possível listar todos os tópicos",
      erro: erro.message,
    });
  }
}

async function buscarPorId(req, res) {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(404).json({ mensagem: "ID inválido" });
    }

    const topico = await topicosModels.buscarPorId(id);

    if (topico) {
      return res.status(200).json(topico);
    } else {
      res.status(400).json({ mensagem: "ID não encontrado !" });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Não foi possível buscar o tópico por ID",
      erro: erro.message,
    });
  }
}

async function criar(req, res) {
  try {
    const { nomet, disciplina, professor } = req.body;

    if (!nomet || !disciplina || !professor) {
      return res
        .status(404)
        .json({ mensagem: "Todos os campos devem ser preenchidos !" });
    }

    const topicoNovo = await topicosModels.criar({
      nomet,
      disciplina,
      professor,
    });

    if (topicoNovo) {
      return res.status(201).json(topicoNovo);
    } else {
      res.status(400).json({ mensagem: "Não foi possível criar o tópico !" });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao criar tópico",
      erro: erro.mensagem,
    });
  }
}

async function atualizar(req, res) {
  try {
    const id = parseInt(req.params.id);
    const { nomet, disciplina, professor } = req.body;

    if (isNaN(id)) {
      return res.status(404).json({ mensagem: "ID inválido" });
    }

    if (!nomet || !disciplina || !professor) {
      return res
        .status(404)
        .json({ mensagem: "Todos os campos devem ser preenchidos !" });
    }

    const topicoAtualizado = await topicosModels.atualizar(id, {
      nomet,
      disciplina,
      professor,
    });

    if (topicoAtualizado) {
      return res.status(200).json(topicoAtualizado);
    } else {
      res
        .status(400)
        .json({ mensagem: "Não foi possível achar o ID do tópico !" });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Não foi possível atualizar o tópico !",
    });
  }
}

async function deletar(req, res) {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(404).json({ mensagem: "ID inválido" });
    }

    const topicoDeletado = await topicosModels.deletar(id);

    if (topicoDeletado) {
      return res.status(200).json({ mensagem: "Tópico deletado com sucesso!" });
    } else {
      res.status(400).json({ mensagem: "ID não encontrado" });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Não foi possível deletar o tópico",
    });
  }
}

module.exports = { listarTodos, buscarPorId, criar, atualizar, deletar };
