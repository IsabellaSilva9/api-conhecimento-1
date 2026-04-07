const express = require("express");
const router = express.Router();

const selectControllers = require("../controllers/selectsControllers");

// SELECT 1
router.get("/select/topico/:id", selectControllers.buscarPorTopico);

// SELECT 2
router.get("/select/ocorre", selectControllers.buscarOcorrencia);

module.exports = router;
