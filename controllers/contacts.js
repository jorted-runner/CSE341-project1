const mongodb = require('../database/db')
const ObjectId = require('mongodb').ObjectId

// Get all contacts
const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('contacts').find()
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(contacts)
    })
}

// Get a single contact by ID
const getSingle = async (req, res) => {
    const userID = new ObjectId(req.params.id)
    const result = await mongodb.getDatabase().db().collection('contacts').find({_id: userID})
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(contacts)
    })
}

// Add a single contact
const addContact = async (req, res) => {
    const newContact = {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			favoriteColor: req.body.favoriteColor,
			birthday: req.body.birthday,
    };
    const result = await mongodb.getDatabase().db().collection('contacts').insertOne(newContact);
    res.status(200).json("New Contact Added")
};

module.exports = { getAll, getSingle, addContact }