const express = require("express");
const router = express.Router();

const questoes_completasControllers = require("../controllers/questoes_completasControllers");

// ÚNICA rota GET
router.get("/completo", questoes_completasControllers.listar);

module.exports = router;
