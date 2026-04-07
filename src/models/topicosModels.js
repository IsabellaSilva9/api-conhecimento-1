const pool = require("../config/database");

async function listarTodos() {
  const result = await pool.query("SELECT * FROM topicos");
  return result.rows;
}

async function buscarPorId(id) {
  const sql = `SELECT * FROM topicos WHERE idt= $1`;
  const result = await pool.query(sql, [id]);
  return result.rows[0];
}

async function criar(dados) {
  const { nomet, disciplina, professor } = dados;
  const sql = `INSERT INTO topicos (nomet, disciplina, professor) VALUES
        ($1, $2, $3) RETURNING *`;
  const result = await pool.query(sql, [nomet, disciplina, professor]);
  return result.rows[0];
}

async function atualizar(id, dados) {
    const {nomet, disciplina, professor} = dados
    const sql = `UPDATE topicos SET nomet= $1, disciplina= $2, professor= $3 WHERE idt= $4  RETURNING *`
    const result = await pool.query(sql, [nomet, disciplina, professor, id]);
    return result.rows[0];
}

async function deletar (id) {
    const sql = `DELETE FROM  topicos WHERE idt= $1 RETURNING *`;
    const result = await pool.query(sql, [id]);
    return result.rowCount;
}

module.exports = {listarTodos, buscarPorId, criar, atualizar, deletar}