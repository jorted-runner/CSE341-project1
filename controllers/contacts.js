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

const addContact = async (req, res) => {
    console.log(req.body);
};

module.exports = { getAll, getSingle, addContact }