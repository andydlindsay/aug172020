const client = require('./db');

const getCats = (cb) => {
  client.query('SELECT * FROM cats ORDER BY id;')
    .then((response) => {
      cb(response.rows);
    });
};

const getCatById = (id) => {
  return client.query('SELECT * FROM cats WHERE id = $1;', [id])
    .then((response) => {
      return response.rows[0];
    });
};

module.exports = {
  getCats,
  getCatById
};
