const mongodb = require('../database/db')
const ObjectId = require('mongodb').ObjectId

// Get all contacts
async function getAll(req, res) {
    const result = await mongodb.getDatabase().db().collection('contacts').find()
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(contacts)
    })
}

// Get a single contact by ID
async function getSingle(req, res) {
    const userID = new ObjectId(req.params.id)
    const result = await mongodb.getDatabase().db().collection('contacts').find({_id: userID})
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(contacts)
    })
}

// Add a single contact
async function addContact(req, res) {
    const newContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    }
    const result = await mongodb.getDatabase().db().collection('contacts').insertOne(newContact)
    res.status(200).json('New Contact Added')
}

// Update a single contact by ID
async function updateContact(req, res) {
    const userID = new ObjectId(req.params.id)
    const updatedData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    }
    const result = await mongodb.getDatabase().db().collection('contacts').updateOne({_id: userID}, {$set: updatedData})
    res.status(200).json("Contact Updated")
}

// Delete a single contact by ID
async function deleteContact(req, res) {
    const userID = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('contacts').deleteOne({_id: userID})
    res.status(200).json('Contact Deleted')
    
}

module.exports = { getAll, getSingle, addContact, updateContact, deleteContact }