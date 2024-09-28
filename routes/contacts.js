const express = require('express');
const router = express.Router();
const { getAll, getSingle, addContact, updateContact, deleteContact } = require('../controllers/contacts');

// Route for getting all contacts (accessed via '/contacts')
router.get('/', getAll);

// Route for getting a single contact by ID (accessed via '/contacts/:id')
router.get('/:id', getSingle);

// Route for adding a single contact (accessed via '/contacts)
router.post('/', addContact);

// Route for updating a single contact by ID (accessed via '/contacts/:id')
router.put('/:id', updateContact);

// Route for deleting a single contact by ID (accessed via '/contacts/:id')
router.delete('/:id', deleteContact)

module.exports = router;