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

// generate id's
let id = 2;
const getNextId = () => {
  id++;
  return id;
};

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// Browse
app.get('/students', (req, res) => {
  const templateVars = { students: studentDatabase };
  res.render('students', templateVars);
});

// new student form
app.get('/students/new', (req, res) => {
  res.render('new-student-form');
});

// Read
app.get('/students/:student_id', (req, res) => {
  const studentId = req.params.student_id;
  const student = studentDatabase[studentId];

  // if (!student) {
  //   res.render('error', errorObj)
  // }

  const templateVars = { student, studentId };
  res.render('student', templateVars);
});

// Delete
app.post('/students/:student_id/delete', (req, res) => {
  const studentId = req.params.student_id;
  delete studentDatabase[studentId];

  res.redirect('/students');
});

// Edit
app.post('/students/:student_id', (req, res) => {
  const year = req.body['student-year'];
  const studentId = req.params.student_id;

  studentDatabase[studentId].year = year;

  res.redirect(`/students/${studentId}`);
});

// Add
app.post('/students', (req, res) => {
  const newStudent = {
    name: req.body.studentName,
    house: req.body.studentHouse,
    year: req.body.studentYear
  };
  const newStudentId = getNextId();

  studentDatabase[newStudentId] = newStudent;

  res.redirect('/students');
});

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
