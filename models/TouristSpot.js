const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: false },
}, {
  timestamps: true, // Adds createdAt and updatedAt to reviews
});


const TouristSpotSchema = new mongoose.Schema({
  image: { type: String, required: true },
  alt: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  history: { type: String, required: true },
  gallery: [{ type: String }],
  openingHours: { type: String, required: true },
  bestTimeToVisit: { type: String, required: true },
  nearbyEmergency: [
    {
      type: { type: String, enum: ['Hospital', 'Police'], required: true },
      name: { type: String, required: true },
      distance: { type: String, required: true },
    },
  ],
  mapEmbedUrl: { type: String, required: true },
  reviews: [reviewSchema],
});

// Explicitly specify the collection name 'touristspots' as the third argument.
// This removes ambiguity and ensures the model is correctly linked to the database collection.
module.exports = mongoose.model('TouristSpot', TouristSpotSchema, 'touristspots');