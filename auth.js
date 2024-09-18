const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Person = require('./models/person'); // Adjust the path as needed

const app = express();

// Passport Local Strategy
passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        console.log("Received data:", username, password);
        const user = await Person.findOne({ username: username });
        if (!user) {
            return done(null, false, { message: 'Invalid username or password' });
        }

        const isPasswordMatch = user.password === password;
        if (isPasswordMatch) {
            return done(null, user, { message: 'Success' });
        } else {
            return done(null, false, { message: 'Invalid password' });
        }
    } catch (err) {
        return done(err);
    }
}));

// Initialize Passport
app.use(passport.initialize());

// Define routes for authentication
app.post('/login', passport.authenticate('local', {
    successRedirect: '/success', // Adjust this route as needed
    failureRedirect: '/login',   // Adjust this route as needed
    failureFlash: true
}));

// Route to handle successful login
app.get('/success', (req, res) => {
    res.send('Login successful!');
});

// Route to handle login page
app.get('/login', (req, res) => {
    res.send('Login page');
});

// Export app
module.exports = app;
