const express = require('express');
const router = express.Router();
const { getUsers, getUserById } = require('../db/user-queries');

// GET /users/
router.get('/', (req, res) => {
  getUsers()
    .then((users) => {
      res.json({ users });
    });
});

// GET /users/:id
router.get('/:id', (req, res) => {
  getUserById(req.params.id)
    .then((user) => {
      res.json({ user });
    })
});

module.exports = router;
