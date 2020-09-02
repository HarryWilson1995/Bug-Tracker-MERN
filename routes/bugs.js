const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Bug = require('../models/Bug');

// @route   GET api/bugs
// @desc    Get all users bugs
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const bugs = await Bug.find({ user: req.user.id }).sort({ date: -1 });
    res.json(bugs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/bugs
// @desc    Add new bug
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, priority, status } = req.body;

    try {
      const newBug = new Bug({
        name,
        description,
        priority,
        status,
        user: req.user.id,
      });

      const bug = await newBug.save();

      res.json(bug);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/bugs/:id
// @desc    Update bug
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update bug');
});

// @route   DELETE api/bugs/:id
// @desc    Delete bug
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete bug');
});

module.exports = router;
