const express = require('express');
const router = express.Router();
const { getUsers, getUserById } = require('../db/user-queries');

router.get('/', (req, res) => {
  getUsers()
    .then((users) => {
      res.json(users);
    });
});

router.get('/:id', (req, res) => {
  getUserById(req.params.id)
    .then((user) => {
      res.json(user);
    });
});

module.exports = router;
