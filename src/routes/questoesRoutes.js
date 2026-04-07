const express = require("express");

const router = express.Router();

const questoesControllers = require("../controllers/questoesControllers");

// GET TODOS
router.get("/questoes", questoesControllers.listarTodos);

// GET POR ID
router.get("/questoes/:id", questoesControllers.buscarPorId);

// POST
router.post("/questoes", questoesControllers.criar);

// PUT
router.put("/questoes/:id", questoesControllers.atualizar);

// DELETE
router.delete("/questoes/:id", questoesControllers.deletar);

module.exports = router;
