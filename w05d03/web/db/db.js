const pg = require('pg');
const Client = pg.Client;

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
};

const client = new Client(config);

client.connect(() => {
  console.log('connected to the database');
});

module.exports = client;
