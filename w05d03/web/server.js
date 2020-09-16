const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 12345;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
