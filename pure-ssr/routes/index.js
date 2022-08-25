var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const nome = req.query.nome;
  res.render("index", { title: nome });
});

module.exports = router;
