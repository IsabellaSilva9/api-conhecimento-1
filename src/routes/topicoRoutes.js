const express = require("express");
const router = express.Router();

const topicoControllers = require("../controllers/topicoControllers");

router.get("/topicos", topicoControllers.listarTodos);

router.get("/topicos/:id", topicoControllers.buscarPorId);

router.post("/topicos", topicoControllers.criar);

router.put("/topicos/:id", topicoControllers.atualizar);

router.delete("/topicos/:id", topicoControllers.deletar);

module.exports = router;
