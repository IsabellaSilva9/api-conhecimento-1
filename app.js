require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const topicosRoutes = require("./src/routes/topicoRoutes");
const questoesRoutes = require("./src/routes/questoesRoutes");
const questoesCompletasRoutes = require("./src/routes/questoes_completasRoutes");
const selectsRoutes = require("./src/routes/selectsRoutes");

app.use("/", topicosRoutes);
app.use("/", questoesRoutes);
app.use("/", questoesCompletasRoutes);
app.use("/", selectsRoutes);

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em: http://localhost:${port}`);
});
