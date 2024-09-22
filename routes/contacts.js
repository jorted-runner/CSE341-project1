const express = require('express');
const router = express.Router();
const { getAll, getSingle } = require('../controllers/contacts');

// Route for getting all contacts (accessed via '/contacts')
router.get('/', getAll);

// Route for getting a single contact by ID (accessed via '/contacts/:id')
router.get('/:id', getSingle);

module.exports = router;