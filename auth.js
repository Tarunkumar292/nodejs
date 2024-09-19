const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/person');

const app = express();

// Passport Local Strategy
passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const user = await Person.findOne({ username: username });
        if (!user) {
            return done(null, false, { message: 'Invalid username or password' });
        }

        const isPasswordMatch = await user.comparepassword(password);
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
app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(401).json({ message: info.message });
        res.status(200).json({ message: 'Login successful', user });
    })(req, res, next);
});

// Route to handle successful login
app.get('/success', (req, res) => {
    res.send('Login successful!');
});

// Route to handle login page
app.get('/login', (req, res) => {
    res.send('Login page');
});

module.exports = app;
