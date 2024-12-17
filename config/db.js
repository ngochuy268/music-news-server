const mysql = require('mysql');

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  connectionLimit: 10,
  waitForConnections: true,
  ssl: {
    rejectUnauthorized: false
  }
};

const connection = mysql.createPool(dbConfig);

connection.getConnection(error => {
  if (error) {
    console.error('Error connecting to database:', error);
  } else {
    console.log('Connected to MySQL database');
  }
});

module.exports = connection;