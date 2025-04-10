// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const SECRET = 'mysecretkey'; // use env in production

exports.signup = (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).send(err);
    User.createUser(name, email, hashedPassword, (err, result) => {
      if (err) return res.status(500).send('User already exists or error occurred', err);
      res.status(201).send('User registered successfully');
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findUserByEmail(email, (err, results) => {
    if (err || results.length === 0) return res.status(400).send('User not found');
    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) return res.status(401).send('Invalid credentials');
      const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Login successful', token });
    });
  });
};
