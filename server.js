const express = require('express')
const mongodb = require('./database/db')
const app = express()
const router = require('./routes')

const port = process.env.PORT || 8080

app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    )
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    next()
})
app.use('/', router)

mongodb.initDB((err) => {
    if (err) {
        console.log(err)
    } else {
        app.listen(port, () => {
            console.log(`Database is listening. App running on port ${port}`)
        })
    }
})