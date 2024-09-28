const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: "Contact Management API"
    },
    host: 'localhost:8080',
    schemas: ['https', 'http']
}

const outputFile = './swagger.json'
const endpointFiles = ['./routes/contacts.js', './routes/index.js']

swaggerAutogen(outputFile, endpointFiles, doc);