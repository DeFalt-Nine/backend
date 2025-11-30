<<<<<<< HEAD

=======
>>>>>>> aa63773e332bdc2d2268d88e3c697b5d3e375116
const express = require('express');
const router = express.Router();
const DiningSpot = require('../models/DiningSpot');
const Subscriber = require('../models/Subscriber');
const mongoose = require('mongoose');
<<<<<<< HEAD
const checkAdmin = require('../middleware/auth');

// @desc    Fetch all dining spots
// @route   GET /api/dining-spots
=======

// @desc    Fetch all dining spots
// @route   GET /api/dining-spots
// @access  Public
>>>>>>> aa63773e332bdc2d2268d88e3c697b5d3e375116
router.get('/', async (req, res) => {
  try {
    const spots = await DiningSpot.aggregate([
      {
        $addFields: {
          averageRating: { $ifNull: [ { $avg: '$reviews.rating' }, 0 ] },
          reviewCount: { $size: { $ifNull: [ '$reviews', [] ] } }
        }
      }
    ]);
    res.json(spots);
  } catch (error) { 
    console.error("Error fetching dining spots:", error);
<<<<<<< HEAD
    res.status(500).json({ message: 'Server Error' });
  }
});

// @desc    Create
router.post('/', checkAdmin, async (req, res) => {
  try {
    const newSpot = await DiningSpot.create(req.body);
    res.status(201).json(newSpot);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Update
router.put('/:id', checkAdmin, async (req, res) => {
  try {
    const updatedSpot = await DiningSpot.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSpot);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Delete
router.delete('/:id', checkAdmin, async (req, res) => {
  try {
    await DiningSpot.findByIdAndDelete(req.params.id);
    res.json({ message: 'Spot removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Delete a review (Moderation)
// @route   DELETE /api/dining-spots/:id/reviews/:reviewId
router.delete('/:id/reviews/:reviewId', checkAdmin, async (req, res) => {
  try {
    const spot = await DiningSpot.findById(req.params.id);
    if (!spot) return res.status(404).json({ message: 'Spot not found' });

    // Filter out the review to be deleted
    spot.reviews = spot.reviews.filter(r => r._id.toString() !== req.params.reviewId);
    
    await spot.save();
    res.json(spot);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Add a review
router.post('/:id/reviews', async (req, res) => {
  const { name, email, rating, comment, images } = req.body;
  if (!name || !email || !rating) return res.status(400).json({ message: 'Required fields missing.' });

  try {
    const spot = await DiningSpot.findById(req.params.id);
    if (!spot) return res.status(404).json({ message: 'Not found' });

    spot.reviews.push({ 
        name, 
        email, 
        rating: Number(rating), 
        comment,
        images: images || [] 
    });
    await spot.save();

=======
    res.status(500).json({ message: 'Server Error while fetching dining spots.' });
  }
});

// @desc    Add a review to a dining spot
// @route   POST /api/dining-spots/:id/reviews
// @access  Public
router.post('/:id/reviews', async (req, res) => {
  const { name, email, rating, comment } = req.body;
  
  if (!name || !email || !rating) {
      return res.status(400).json({ message: 'Name, email, and rating are required.' });
  }

  try {
    const spot = await DiningSpot.findById(req.params.id);

    if (!spot) {
      return res.status(404).json({ message: 'Dining spot not found' });
    }

    const newReview = { name, email, rating: Number(rating), comment };

    spot.reviews.push(newReview);
    await spot.save();

    // Capture email silently
>>>>>>> aa63773e332bdc2d2268d88e3c697b5d3e375116
    try {
        await Subscriber.findOneAndUpdate(
            { email: email },
            { $setOnInsert: { email: email, source: 'review' } },
            { upsert: true }
        );
<<<<<<< HEAD
    } catch (e) {}
=======
    } catch (subError) { }
>>>>>>> aa63773e332bdc2d2268d88e3c697b5d3e375116
    
    const updatedSpot = await DiningSpot.aggregate([
        { $match: { _id: new mongoose.Types.ObjectId(req.params.id) } },
        { $addFields: { averageRating: { $ifNull: [ { $avg: '$reviews.rating' }, 0 ] } } }
    ]);

    res.status(201).json(updatedSpot[0]);
<<<<<<< HEAD
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
=======

  } catch (error) {
    res.status(500).json({ message: 'Server error while adding review' });
  }
});

module.exports = router;
>>>>>>> aa63773e332bdc2d2268d88e3c697b5d3e375116
