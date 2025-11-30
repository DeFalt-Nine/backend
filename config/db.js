const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    console.error('FATAL ERROR: MONGO_URI is not defined in your environment variables.');
<<<<<<< HEAD
    process.exit(1);
  }

  // Check if we are already connected to avoid multiple connections
  if (mongoose.connection.readyState >= 1) {
    return;
  }

=======
    console.error('Please ensure you have a .env file in the /backend directory with MONGO_URI=<your_mongodb_connection_string>');
    process.exit(1);
  }

>>>>>>> aa63773e332bdc2d2268d88e3c697b5d3e375116
  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

<<<<<<< HEAD
module.exports = { connectDB };
=======
module.exports = { connectDB };
>>>>>>> aa63773e332bdc2d2268d88e3c697b5d3e375116
