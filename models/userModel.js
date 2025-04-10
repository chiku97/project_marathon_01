// models/userModel.js
const db = require('../config/db');

exports.createUser = (name, email, hashedPassword, callback) => {
  const sql = 'INSERT INTO auth_users (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, hashedPassword], callback);
};

exports.findUserByEmail = (email, callback) => {
  const sql = 'SELECT * FROM auth_users WHERE email = ?';
  db.query(sql, [email], callback);
};
