
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { connectDB } = require('./config/db');

const app = express();

// Middleware
app.use(cors()); 
app.use(express.json());

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

// Serve uploaded files statically
app.use('/uploads', express.static(uploadDir));

const ensureDbConnection = async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(503).json({ message: 'Service temporarily unavailable. Please try again later.' });
  }
};

// Define routes
console.log('Mounting routes...');
app.use('/api/health', require('./routes/health'));
app.use('/api/upload', require('./routes/upload')); 
app.use('/api/chatbot', ensureDbConnection, require('./routes/chatbot'));
app.use('/api/analytics', ensureDbConnection, require('./routes/analytics'));
app.use('/api/tourist-spots', ensureDbConnection, require('./routes/touristSpots'));
app.use('/api/dining-spots', ensureDbConnection, require('./routes/diningSpots'));
app.use('/api/blog-posts', ensureDbConnection, require('./routes/blogPosts'));
app.use('/api/events', ensureDbConnection, require('./routes/events'));
app.use('/api/subscribers', ensureDbConnection, require('./routes/subscribers'));
app.use('/api/reports', ensureDbConnection, require('./routes/reports')); // New Route
console.log('Routes mounted successfully.');

module.exports = app;

if (require.main === module) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`- Uploads serving at /uploads`);
        console.log(`- API endpoints available at /api/`);
    });
}
