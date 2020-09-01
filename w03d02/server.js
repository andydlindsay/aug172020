const express = require('express');
const morgan = require('morgan');

const app = express();
// use the PORT environment variable if available
// otherwise fallback to 7654
const port = process.env.PORT || 7654;

const studentDatabase = {
  '1': {
    name: 'Jennifer',
    house: 'Hufflepuff',
    year: 3
  },
  '2': {
    name: 'Harry',
    house: 'Slytherin',
    year: 5
  }
};

app.use(morgan('dev'));
app.set('view engine', 'ejs');

// Browse
app.get('/students', (req, res) => {
  const templateVars = { students: studentDatabase };
  res.render('students', templateVars);
});

// Read
app.get('/students/:student_id', (req, res) => {
  const studentId = req.params.student_id;
  const student = studentDatabase[studentId];

  // if (!student) {
  //   res.render('error', errorObj)
  // }
  
  const templateVars = { student };
  res.render('student', templateVars);
});

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
