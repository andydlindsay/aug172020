const express = require('express');
const router = express.Router();
const { getCats, getCatById } = require('../db/cat-queries');

router.get('/', (req, res) => {
  getCats((cats) => {
    res.render('cats', { cats });
  });
});

router.get('/:id', (req, res) => {
  getCatById(req.params.id)
    .then((cat) => {
      res.render('cat', { cat });
    });
});

module.exports = router;
