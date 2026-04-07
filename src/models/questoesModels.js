const pool = require("../config/database");

// GET TODOS
async function listarTodos() {
  const result = await pool.query("SELECT * FROM questoes");
  return result.rows;
}

// GET POR ID
async function buscarPorId(id) {
  const sql = `SELECT * FROM questoes WHERE idq = $1`;
  const result = await pool.query(sql, [id]);
  return result.rows[0];
}

// POST
async function criar(dados) {
  const { topico, enunciado, resposta, linkbib } = dados;

  const sql = `INSERT INTO questoes (topico, enunciado, resposta, linkbib)
               VALUES ($1, $2, $3, $4) RETURNING *`;

  const result = await pool.query(sql, [
    topico,
    enunciado,
    resposta,
    linkbib,
  ]);

  return result.rows[0];
}

// PUT
async function atualizar(id, dados) {
  const { topico, enunciado, resposta, linkbib } = dados;

  const sql = `UPDATE questoes
               SET topico = $1, enunciado = $2, resposta = $3, linkbib = $4
               WHERE idq = $5 RETURNING *`;

  const result = await pool.query(sql, [
    topico,
    enunciado,
    resposta,
    linkbib,
    id,
  ]);

  return result.rows[0];
}

// DELETE
async function deletar(id) {
  const sql = `DELETE FROM questoes WHERE idq = $1 RETURNING *`;
  const result = await pool.query(sql, [id]);
  return result.rowCount;
}

module.exports = {
  listarTodos,
  buscarPorId,
  criar,
  atualizar,
  deletar,
};