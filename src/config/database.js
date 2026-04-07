const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const { resolve } = require("dns");
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
});

pool.connect((erro, client, release) => {
  if (erro) {
    console.error("❌ Erro ao conectar-se ao PostGreSQL", erro);
  } else {
    console.log("✅ Conectado cm sucesso ao PostGreSQL");
    release();
  }
});

module.exports = pool;
