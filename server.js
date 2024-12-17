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