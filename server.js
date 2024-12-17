// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const multer = require('multer');
// const path = require('path');

// const app = express();
// const port = 8081;

// app.use(cors({origin: 'http://localhost:3000'}));
// app.use(express.json()); // Sử dụng JSON parser middleware để có thể đọc dữ liệu từ request body


// // Kết nối đến cơ sở dữ liệu MySQL
// const connection = mysql.createPool({
//   host: 'localhost',
//   user: 'root', // Thay username nếu cần
//   password: '', // Thay password nếu cần
//   database: 'news' // Thay tên cơ sở dữ liệu nếu cần
// });

// connection.getConnection(error => {
//   if (error) {
//     console.error('Error connecting to database:', error);
//   } else {
//     console.log('Connected to MySQL database');
//   }
// });


// // API endpoint để lấy dữ liệu từ cơ sở dữ liệu
// app.get('/api/pop_music', (req, res) => {
//   const query = 'SELECT * FROM pop_music';
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error('Error querying database:', error);
//       res.status(500).json({ error: 'Error querying database' });
//     } else {
//         // console.log('Query result:', results);
//       res.json(results);
//     }
//     // console.log('Query result:', results);
//   });
// });

// // API endpoint để thêm dữ liệu vào cơ sở dữ liệu
// app.post('/api/pop_music', (req, res) => {
//   const {name, content, link_img, link_video, author } = req.body;
//   const query = 'INSERT INTO pop_music (name, content, link_img, link_video, author) VALUES (?, ?, ?, ?, ?)';
//   connection.query(query, [name, content, link_img, link_video, author], (error, result) => {
//     if (error) {
//       console.error('Error inserting data into database:', error);
//       res.status(500).json({ error: 'Error inserting data into database' });
//     } else {
//       console.log('Data inserted successfully');
//       res.status(200).json({ message: 'Data inserted successfully' });
//     }
//   });
// });





// // Gửi email
// app.post('/api/send-email', (req, res) => {
//   const { name, email, subject, message } = req.body;

//   // Tạo một bộ gửi thư
//   let transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//           user: 'popvibes.net@gmail.com', // Gmail của bạn
//           pass: 'gejl hpdl ergo qsdx' // Mật khẩu Gmail của bạn
//       }
//   });

//   // Định nghĩa nội dung email dựa trên thông tin từ biểu mẫu
//   let mailOptions = {
//       from: email, // Địa chỉ email người gửi (được nhập từ biểu mẫu)
//       to: 'popvibes.net@gmail.com', // Địa chỉ email người nhận (địa chỉ cố định)
//       subject: subject, // Tiêu đề email (được nhập từ biểu mẫu)
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` // Nội dung email (được nhập từ biểu mẫu)
//   };

//   // Gửi email
//   transporter.sendMail(mailOptions, function(error, info) {
//       if (error) {
//           console.log(error);
//           res.status(500).send('Error sending email');
//       } else {
//           console.log('Email sent: ' + info.response);
//           res.status(200).send('Email sent successfully');
//       }
//   });
// });
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


const express = require('express');
const cors = require('cors');
const musicRoutes = require('./routes/musicRoutes');
const emailRoutes = require('./routes/emailRoutes');

const app = express();
const port = 8081;

app.use(cors({ 
  origin: ['http://localhost:3000','https://music-news-client.vercel.app'], 
  methods: 'GET, POST', 
  allowedHeaders: 'Content-Type, Authorization',  }));
app.use(express.json());

// Routes
app.use('/api', musicRoutes);
app.use('/api', emailRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});