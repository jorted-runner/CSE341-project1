const express = require('express');
const router = express.Router();
const { getAll, getSingle, addContact } = require('../controllers/contacts');

// Route for getting all contacts (accessed via '/contacts')
router.get('/', getAll);

// Route for getting a single contact by ID (accessed via '/contacts/:id')
router.get('/:id', getSingle);

// Route for adding a single contact (accessed via '/contacts?firstName=<firstName>&lastName=<lastName>&email=<email>&favoriteColor=<favoriteColor>&birthday=<birthday>)
router.post('/', addContact);


module.exports = router;