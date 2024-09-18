const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const mongoose = require('mongoose');
const Person = require('./models/person'); // Adjust the path as needed

const app = express();

// Session setup
app.use(session({
    secret: 'your_secret_key', // Change this to a strong secret
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

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

// Serialize and deserialize user
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await Person.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

// Export auth
module.exports = passport;
