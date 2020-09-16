const pg = require('pg');
const Client = pg.Client;

// const { Client } = require('pg');

const config = {
  user: 'whbkzmlk',
  password: 'Ou2462D3bhFbZIs5jax5G3-ISbNneP2I',
  database: 'whbkzmlk',
  host: 'lallah.db.elephantsql.com',
  port: 5432
};

const client = new Client(config);

client.connect(() => {
  console.log('connected to the database');
});

const verb = process.argv[2];
let id;

switch(verb) {
  case 'browse':
    client.query('SELECT * FROM cats ORDER BY id;')
      .then((response) => {
        console.log(response.rows);
        client.end();
      });
    break;

  case 'read':
    id = process.argv[3];
    client.query('SELECT * FROM cats WHERE id = $1;', [id])
      .then((response) => {
        console.log(response.rows);
        client.end();
      });
    break;

  case 'edit':
    id = process.argv[3];
    const newName = process.argv[4];
    client.query('UPDATE cats SET name = $2 WHERE id = $1;', [id, newName])
      .then(() => {
        console.log('Cat updated successfully');
        client.end();
      });
    break;

  case 'add':
    const catName = process.argv[3];
    const catBreed = process.argv[4];
    client.query('INSERT INTO cats (name, breed) VALUES($1, $2);', [catName, catBreed])
      .then(() => {
        console.log('Cat created successfully');
        client.end();
      });
    break;

  case 'delete':
    id = process.argv[3];
    client.query('DELETE FROM cats WHERE id = $1;', [id])
      .then(() => {
        console.log('Cat adopted successfully');
        client.end();
      });
    break; 

  default:
    console.log('please enter a BREAD verb');
    client.end();
} 
