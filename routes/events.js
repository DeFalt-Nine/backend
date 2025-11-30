
const express = require('express');
const router = express.Router();
const LocalEvent = require('../models/LocalEvent');
<<<<<<< HEAD
const checkAdmin = require('../middleware/auth');

// @desc    Fetch all local events
=======

// @desc    Fetch all local events
// @route   GET /api/events
// @access  Public
>>>>>>> aa63773e332bdc2d2268d88e3c697b5d3e375116
router.get('/', async (req, res) => {
  try {
    const events = await LocalEvent.find();
    res.json(events);
  } catch (error) {
<<<<<<< HEAD
    res.status(500).json({ message: 'Server Error' });
  }
});

// @desc    Create
router.post('/', checkAdmin, async (req, res) => {
  try {
    const newEvent = await LocalEvent.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Update
router.put('/:id', checkAdmin, async (req, res) => {
  try {
    const updatedEvent = await LocalEvent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Delete
router.delete('/:id', checkAdmin, async (req, res) => {
  try {
    await LocalEvent.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
=======
    console.error("Error fetching events:", error);
    if (error.name === 'MongooseServerSelectionError') {
      return res.status(503).json({ message: 'Could not connect to the database. Please check network configuration.' });
    }
    res.status(500).json({ message: 'Server Error while fetching events.' });
>>>>>>> aa63773e332bdc2d2268d88e3c697b5d3e375116
  }
});

module.exports = router;
