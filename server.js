require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');

const chatbotRouter = require('./routes/chatbot');
const touristSpotsRouter = require('./routes/touristSpots');

const TouristSpot = require('./models/TouristSpot');
const touristSpotsData = require('./data/touristSpotsData');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Routes
app.use('/api/chatbot', chatbotRouter);
app.use('/api/tourist-spots', touristSpotsRouter);

// Centralized error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server encountered an error' });
});

const startServer = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Auto-seed only if DB is empty
    const count = await TouristSpot.countDocuments();
    if (count === 0) {
      for (const spotData of touristSpotsData) {
        await TouristSpot.create(spotData);
      }
    }
    console.log('Database synchronization complete.');

    // Start the server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error(`FATAL ERROR: Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

startServer();
