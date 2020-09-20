require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db/db.js');

const productRouter = require('./routes/product-router');
const userRouter = require('./routes/user-router');
const postRouter = require('./routes/post-router');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/posts', postRouter(db));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
