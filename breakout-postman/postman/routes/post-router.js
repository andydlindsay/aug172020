const express = require('express');
const router = express.Router();

const postRouter = (db) => {
  // GET /posts/
  router.get('/', (req, res) => {
    const query = 'SELECT * FROM posts;';
    db.query(query)
      .then((response) => {
        res.json({ posts: response.rows });
      })
      .catch(() => {
        res.json({ success: false });
      });
  });

  // GET /posts/:id
  router.get('/:id', (req, res) => {
    const query = 'SELECT * FROM posts WHERE id = $1;';
    db.query(query, [req.params.id])
      .then((response) => {
        res.json({ post: response.rows[0] });
      })
      .catch(() => {
        res.json({ success: false });
      });
  });

  // POST /posts
  router.post('/', (req, res) => {
    const {user_id, title, content} = req.body;
    const query = 'INSERT INTO posts(user_id, title, content) VALUES($1, $2, $3) RETURNING *;';
    db.query(query, [user_id, title, content])
      .then((response) => {
        res.json({ success: true, post: response.rows[0] });
      })
      .catch((err) => {
        res.json({ success: false, error: err });
      });
  });

  // PATCH /posts/:id
  router.patch('/:id', (req, res) => {
    const {title, content} = req.body;
    const query = 'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *;';
    db.query(query, [title, content, req.params.id])
      .then((response) => {
        res.json({ success: true, post: response.rows[0] });
      })
      .catch((err) => {
        res.json({ success: false, error: err });
      });
  });

  // DELETE /posts/:id
  // POST /posts/:id/delete
  router.delete('/:id', (req, res) => {
    const query = 'DELETE FROM posts WHERE id = $1;';
    db.query(query, [req.params.id])
      .then(() => {
        res.json({ success: true });
      })
      .catch((err) => {
        res.json({ success: false, error: err });
      });
  });

  return router;
};

module.exports = postRouter;
