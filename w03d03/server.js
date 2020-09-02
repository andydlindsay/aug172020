const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const languageData = require('./languages.json');
const bodyParser = require('body-parser');
const uuid = require('uuid');

const app = express();
const port = process.env.PORT || 8765;

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

const userDatabase = {
  'abcd': {
    id: 'abcd',
    email: 'jstamos@mail.com',
    password: '1234'
  },
  'efgh': {
    id: 'efgh',
    email: 'bsaget@mail.com',
    password: '5678'
  },
  'ijkl': {
    id: 'ijkl',
    email: 'kgibbler@mail.com',
    password: '12345'
  }
};

const findUserByEmail = (email) => {
  for (const userId in userDatabase) {
    const user = userDatabase[userId];
    if (user.email === email) {
      return user;
    }
  }
  return null;
};

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  // const { email, password } = req.body;
  const email = req.body.email;
  const password = req.body.password;

  // did they send an email and password
  if (!email || !password) {
    return res.send('email and password cannot be blank');
  }

  // look through the user database and find the user
  const foundUser = findUserByEmail(email);

  // if we don't find a user, return an error message
  if (foundUser === null) {
    return res.send('no user with that email found');
  }

  // if we do find a user, compare the passwords
  if (foundUser.password !== password) {
    // if not correct, return an error message
    return res.send('password incorrect for that user');
  }

  // if correct, set the cookie (user_id), redirect to /home
  res.cookie('user_id', foundUser.id);

  res.redirect('/home');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  // did they send an email and password
  const { email, password } = req.body;
  if (!email || !password) {
    return res.send('email and password cannot be blank');
  }

  // call the findUser function
  const foundUser = findUserByEmail(email);

  if (foundUser) {
    return res.send('user with that email already registered');
  }

  const id = uuid.v4().split('-')[1];
  const newUser = {
    id: id,
    email: req.body.email,
    password: req.body.password
  };

  userDatabase[id] = newUser;

  console.log(userDatabase);
  res.redirect('/login');
});

// language preference
app.get('/languages/:lang', (req, res) => {
  const languagePreference = req.params.lang;

  res.cookie('language', languagePreference);
  res.redirect('/home');
});

app.get('/home', (req, res) => {
  const language = req.cookies.language;
  const templateVars = {
    heading: languageData.homeHeadings[language],
    body: languageData.homeBodies[language]
  };

  res.render('home', templateVars);
});

app.get('/about', (req, res) => {
  const language = req.cookies.language;
  const templateVars = {
    heading: languageData.aboutHeadings[language],
    body: languageData.aboutBodies[language]
  };

  res.render('about', templateVars);
});

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
