const express = require('express');
const router = express.Router();

// @route   GET api/bugs
// @desc    Get all users bugs
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all users bugs');
});

// @route   POST api/bugs
// @desc    Add new bug
// @access  Private
router.post('/', (req, res) => {
  res.send('Add bug');
});

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
