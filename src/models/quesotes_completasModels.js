const pool = require("../config/database");

async function listarTodos() {
  const result = await pool.query("SELECT * FROM questoes_completas");
  return result.rows;
}

module.exports = { listarTodos };
