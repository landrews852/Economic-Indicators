var express = require("express");
var router = express.Router();
const indicators = require("./indicators");

/* indicators ROUTER. */
router.use("/api/indicadores", indicators);

module.exports = router;
