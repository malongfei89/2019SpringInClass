const mysql = require('mysql');
              require('dotenv').load();
const conn = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user:'root',
  password: 'gaolin273541',
  database: 'forexercise'
});

module.exports = conn;
