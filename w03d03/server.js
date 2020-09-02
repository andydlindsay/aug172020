const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8765;

app.use(morgan('dev'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
