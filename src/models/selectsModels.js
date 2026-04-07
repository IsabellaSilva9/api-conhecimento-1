const pool = require("../config/database");

// SELECT 1 → por tópico
async function buscarPorTopico(id) {
  const sql = `SELECT enunciado, resposta FROM questoes WHERE topico = $1`;
  const result = await pool.query(sql, [id]);
  return result.rows;
}

// SELECT 2 → palavra "ocorre"
async function buscarOcorrencia() {
  const sql = `SELECT enunciado, resposta FROM questoes WHERE enunciado ILIKE '%ocorre%'`;
  const result = await pool.query(sql);
  return result.rows;
}

module.exports = {
  buscarPorTopico,
  buscarOcorrencia,
};
