const fs = require('fs');

fs.readFile('./indx.html', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    return console.log(err);
  }

  console.log('Async: ', data.length);
});

const data = fs.readFileSync('./index.html', { encoding: 'utf-8' });
console.log('sync: ', data.length);

const hof = (cb) => {
  // operation ran into an error
  return cb(err);

  // operation ran successfully
  return cb(null, data);
};
