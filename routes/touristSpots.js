const express = require('express');
const router = express.Router();
const TouristSpot = require('../models/TouristSpot');
const mongoose = require('mongoose');

// @desc    Fetch all tourist spots
// @route   GET /api/tourist-spots
// @access  Public
router.get('/', async (req, res) => {
  try {
    const spots = await TouristSpot.aggregate([
      {
        $addFields: {
          averageRating: { $ifNull: [ { $avg: '$reviews.rating' }, 0 ] },
          // Use $ifNull to handle documents where 'reviews' array might be missing
          reviewCount: { $size: { $ifNull: [ '$reviews', [] ] } }
        }
      }
    ]);
    res.json(spots);
  } catch (error) { 
    console.error("Error fetching from MongoDB:", error);
    res.status(500).json({ message: 'Server Error while fetching from DB' });
  }
});

// @desc    Add a review to a tourist spot
// @route   POST /api/tourist-spots/:id/reviews
// @access  Public
router.post('/:id/reviews', async (req, res) => {
  const { name, email, rating, comment } = req.body;
  
  if (!name || !email || !rating) {
      return res.status(400).json({ message: 'Name, email, and rating are required.' });
  }

  try {
    const spot = await TouristSpot.findById(req.params.id);

    if (!spot) {
      return res.status(404).json({ message: 'Tourist spot not found' });
    }

    const newReview = {
      name,
      email,
      rating: Number(rating),
      comment,
    };

    spot.reviews.push(newReview);

    await spot.save();
    
    // After saving, refetch the single document with its new average rating
    const updatedSpotWithRating = await TouristSpot.aggregate([
        { $match: { _id: new mongoose.Types.ObjectId(req.params.id) } },
        {
            $addFields: {
                averageRating: { $ifNull: [ { $avg: '$reviews.rating' }, 0 ] },
            }
        }
    ]);

    if (!updatedSpotWithRating || updatedSpotWithRating.length === 0) {
        return res.status(404).json({ message: 'Could not find updated spot.' });
    }

    res.status(201).json(updatedSpotWithRating[0]);

  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ message: 'Server error while adding review' });
  }
});


module.exports = router;