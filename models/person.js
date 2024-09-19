const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Person schema
const personschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['frontend', 'backend', 'fullstack'],
        required: true
    },
    mobile: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid 10-digit mobile number!`
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

personschema.pre('save', async function (next) {
    const person = this;
    if (!person.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(person.password, salt);
        person.password = hashedPassword;
        next();
    } catch (err) {
        return next(err);
    }
});

personschema.methods.comparepassword = async function(candidatePassword){
    try{
        return await bcrypt.compare(candidatePassword, this.password);
    } catch(err){
        throw new Error("error");
    }
};

// Model creation
const Person = mongoose.model('Person', personschema);

module.exports = Person;
