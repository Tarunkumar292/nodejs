const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
const mongoURL = 'mongodb://localhost:27017/company'; 
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const db = mongoose.connection;


// db.on('connected', () => {
//     console.log('Connected to MongoDB');
// });

module.exports = db;
