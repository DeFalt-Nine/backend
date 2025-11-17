require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');

const chatbotRouter = require('./routes/chatbot');
const touristSpotsRouter = require('./routes/touristSpots');

// Import model and data for auto-seeding
const TouristSpot = require('./models/TouristSpot');
const touristSpotsData = require('./data/touristSpotsData');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/chatbot', chatbotRouter);
app.use('/api/tourist-spots', touristSpotsRouter);

// Centralized error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const startServer = async () => {
  try {
    // Wait for the database to connect successfully first
    await connectDB();
    
    // Auto-seed the database with any missing tourist spots
    console.log('Checking for missing tourist spots...');
    for (const spotData of touristSpotsData) {
      const existingSpot = await TouristSpot.findOne({ name: spotData.name });
      if (!existingSpot) {
        console.log(`Adding new spot to database: ${spotData.name}`);
        await TouristSpot.create(spotData);
      }
    }
    console.log('Database synchronization complete.');

    // Then, start the Express server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error(`FATAL ERROR: Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

startServer();