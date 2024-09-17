const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 2
    },
    drink: {
        type: Boolean,
        default: false
    },
    taste: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
