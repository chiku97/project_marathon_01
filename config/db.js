// config/db.js
const mysql = require('mysql2');

// Define the connection URL
const connectionUrl = 'mysql://root:wgSICUlEKEkDPbfwlywgNDgfbRhYcVXQ@tramway.proxy.rlwy.net:24813/railway'; // Replace with your actual credentials

// Create a connection using the URL
const connection = mysql.createConnection(connectionUrl);

connection.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected!');
});

module.exports = connection;
