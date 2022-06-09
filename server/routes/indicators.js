var express = require("express");
var router = express.Router();
var indicatorsController = require("../controllers/indicators.controller");

/* GET indicators listing. */
router.get("/", indicatorsController.getAllIndicators);

/* GET indicator by code. */
router.get("/:code", indicatorsController.getIndicatorByCode);

/* GET indicator by code and date. */
router.get("/:code/:date", indicatorsController.getIndicatorByDate);

module.exports = router;
