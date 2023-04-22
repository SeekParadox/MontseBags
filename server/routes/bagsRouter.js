const express = require("express");
const router = express.Router();
var products = require("../Models/ProductModel");

router.get("/", (req, res) => {
  products
    .findAll()
    .then((all) => res.json(all).status(200))
    .catch((error) =>
      res
        .send(
          "<p><strong>502. </strong>An error has occurred</p <p>The server encountered an erorr and could not complete your request.</p>"
        )
        .status(502)
    );
});

module.exports = router;
