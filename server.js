const express = require('express');
const app = express();

// Database connection
const db = require('./db');
const Person = require('./models/person');

// Body parser (using built-in Express middleware)
app.use(express.json());

// Auth
const passport = require('passport');
const auth = require('./auth');
app.use(auth);

// Middleware function
const logrequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request made to: ${req.originalUrl}`);
    next();
};
app.use(logrequest);

// Import routes
const personroutes = require('./routes/personroutes');
app.use('/person', personroutes);

//dotenv
require('dotenv').config();

// Pass auth
const localpass = passport.authenticate('local', { session: false });

// Get function
app.get('/', localpass, (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
