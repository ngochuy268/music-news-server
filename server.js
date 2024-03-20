const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 8081;

app.use(cors());
app.use(express.json()); // Sử dụng JSON parser middleware để có thể đọc dữ liệu từ request body


// Kết nối đến cơ sở dữ liệu MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Thay username nếu cần
  password: '', // Thay password nếu cần
  database: 'news' // Thay tên cơ sở dữ liệu nếu cần
});

// Khi kết nối đến cơ sở dữ liệu thành công
connection.connect(error => {
  if (error) {
    console.error('Error connecting to database:', error);
  } else {
    console.log('Connected to MySQL database');
  }
});


// API endpoint để lấy dữ liệu từ cơ sở dữ liệu
app.get('/pop_music', (req, res) => {
  const query = 'SELECT * FROM pop_music';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).json({ error: 'Error querying database' });
    } else {
        console.log('Query result:', results);
      res.json(results);
    }
    console.log('Query result:', results);
  });
});

// API endpoint để thêm dữ liệu vào cơ sở dữ liệu
app.post('/pop_music', (req, res) => {
  const {name, content, link_img, link_video, author } = req.body;
  const query = 'INSERT INTO pop_music (name, content, link_img, link_video, author) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [name, content, link_img, link_video, author], (error, result) => {
    if (error) {
      console.error('Error inserting data into database:', error);
      res.status(500).json({ error: 'Error inserting data into database' });
    } else {
      console.log('Data inserted successfully');
      res.status(200).json({ message: 'Data inserted successfully' });
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});






// server {
//   listen 80;
//   listen [::]:80;
//   server_name popvibes.net www.popvibes.net;

//   root /var/www/popvibes.net/html;

//   index index.html index.htm index.nginx-debian.html;

//   location / {
//       try_files $uri $uri/ =404;
//   }
// }

