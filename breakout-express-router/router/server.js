require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

const productRouter = require('./routes/product-router');
const userRouter = require('./routes/user-router');

app.use(morgan('dev'));

app.use('/products', productRouter);
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
