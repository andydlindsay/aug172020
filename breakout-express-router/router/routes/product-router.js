const express = require('express');
const router = express.Router();
const { getProducts, getProductById } = require('../db/product-queries');

router.get('/', (req, res) => {
  getProducts()
    .then((products) => {
      res.json(products);
    });
});

router.get('/:id', (req, res) => {
  getProductById(req.params.id)
    .then((product) => {
      res.json(product);
    });
});

module.exports = router;
