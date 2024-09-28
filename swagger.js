const swaggerAutogen = require('swagger-autogen')();

const doc = {
	info: {
		title: 'Contacts API',
		description: 'Contact Management API',
	},
	host: 'cse341-project1-ascp.onrender.com',
	schemas: ['https', 'http'],
};

const outputFile = './swagger.json'
const endpointFiles = ['./routes/contacts.js', './routes/index.js']

swaggerAutogen(outputFile, endpointFiles, doc);