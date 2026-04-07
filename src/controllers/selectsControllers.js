const selectModels = require("../models/selectsModels");

// SELECT 1
async function buscarPorTopico(req, res) {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(404).json({ mensagem: "ID inválido" });
    }

    const resultado = await selectModels.buscarPorTopico(id);
    res.status(200).json(resultado);
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao buscar por tópico",
      erro: erro.message,
    });
  }
}

// SELECT 2
async function buscarOcorrencia(req, res) {
  try {
    const palavra = req.params.palavra;
    const resultado = await selectModels.buscarOcorrencia(palavra);

    if (resultado.length > 0) {
      return res.status(200).json(resultado);
    } else {
      res.status(404).json({ mensagem: "palavra não encontrada" });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro na busca",
      erro: erro.message,
    });
  }
}

module.exports = {
  buscarPorTopico,
  buscarOcorrencia,
};
