
require('dotenv').config();
const express = require('express');
const cors = require('cors');
<<<<<<< HEAD
const path = require('path');
const fs = require('fs');
=======
>>>>>>> aa63773e332bdc2d2268d88e3c697b5d3e375116
const { connectDB } = require('./config/db');

const app = express();

// Middleware
app.use(cors()); 
app.use(express.json());

<<<<<<< HEAD
// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

// Serve uploaded files statically
app.use('/uploads', express.static(uploadDir));

=======
>>>>>>> aa63773e332bdc2d2268d88e3c697b5d3e375116
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
<<<<<<< HEAD
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
=======
app.use('/api/health', require('./routes/health'));
app.use('/api/chatbot', ensureDbConnection, require('./routes/chatbot'));
app.use('/api/analytics', ensureDbConnection, require('./routes/analytics'));
app.use('/api/tourist-spots', ensureDbConnection, require('./routes/touristSpots'));
app.use('/api/dining-spots', ensureDbConnection, require('./routes/diningSpots')); // NEW
app.use('/api/blog-posts', ensureDbConnection, require('./routes/blogPosts'));
app.use('/api/events', ensureDbConnection, require('./routes/events'));
app.use('/api/subscribers', ensureDbConnection, require('./routes/subscribers'));
>>>>>>> aa63773e332bdc2d2268d88e3c697b5d3e375116

module.exports = app;

if (require.main === module) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on port ${PORT}`);
<<<<<<< HEAD
        console.log(`- Uploads serving at /uploads`);
        console.log(`- API endpoints available at /api/`);
    });
}
=======
        console.log(`Routes mounted:`);
        console.log(`- POST /api/chatbot`);
        console.log(`- POST /api/analytics/chat`);
        console.log(`- GET /api/tourist-spots`);
        console.log(`- GET /api/dining-spots`);
        console.log(`- GET /api/blog-posts`);
        console.log(`- GET /api/events`);
        console.log(`- POST /api/subscribers`);
    });
}
>>>>>>> aa63773e332bdc2d2268d88e3c697b5d3e375116
