const express = require('express');
const router = express.Router();

const postRouter = (db) => {
  // GET /posts/
  router.get('/', (req, res) => {
    const query = 'SELECT * FROM posts;';
    db.query(query)
      .then((response) => {
        res.json({ posts: response.rows });
      });
  });

  // GET /posts/:id
  router.get('/:id', (req, res) => {
    const query = 'SELECT * FROM posts WHERE id = $1;';
    db.query(query, [req.params.id])
      .then((response) => {
        res.json({ post: response.rows[0] });
      });
  });

  return router;
};

module.exports = postRouter;
