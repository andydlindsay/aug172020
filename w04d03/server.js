const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const posts = require('./data/posts.json');
const users = require('./data/users.json');

const app = express();
const port = process.env.PORT || 789;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('public'));

// retrieve all posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// retrieve the post that matches the provided id
app.get('/api/posts/:id', (req, res) => {
  res.json(posts[req.params.id]);
});

// retrieve all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// retrieve the user that matches the provided id
app.get('/api/users/:id', (req, res) => {
  res.json(users[req.params.id]);
});

// create a new user
app.post('/api/users', (req, res) => {
  const id = Object.values(users).length + 1;
  users[id] = {
    id,
    name: req.body.name,
    username: req.body.username
  };
  res.json({ success: true });
});

// create a new post
app.post('/api/posts', (req, res) => {
  const id = Object.values(posts).length + 1;
  posts[id] = {
    id,
    title: req.body.title,
    content: req.body.content,
    author_id: Number(req.body.authorId)
  };
  res.json({ success: true });
});

// update a user
app.put('/api/users/:id', (req, res) => {
  users[req.params.id] = {
    id: Number(req.params.id),
    name: req.body.name,
    username: req.body.username
  };
  res.json({ success: true });
});

// update a post
app.put('/api/posts/:id', (req, res) => {
  posts[req.params.id] = {
    id: Number(req.params.id),
    title: req.body.title,
    content: req.body.content,
    author_id: Number(req.body.authorId)
  };
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
