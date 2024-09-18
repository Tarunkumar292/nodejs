// express
const express = require('express');
const app = express();

// Database connection
const db = require('./db');
const Person = require('./models/person')

// Body parser (using built-in Express middleware)
app.use(express.json());

// auth
const passport = require('passport');
const auth = require('./auth')

//middelware function
const logrequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request made to: ${req.originalUrl}`);
    next();
};
app.use(logrequest)

// Import routes
const personroutes = require('./routes/personroutes');
app.use('/person', personroutes);

//dotenv
require('dotenv').config();

//get function
app.get('/', passport.authenticate('local', { session: false }), (req, res) => {
    res.send('Hello World');
});
// app.get('/paneer', function(req,res){
//     var customize_paneer={
//         name:"paneer",
//         price:100,
//         is_chutney:true,
//         is_extraspaicy:false
//     }
//     res.send(customize_paneer)
// })

// menu item practice of backend
// const express = require('express');
// const app = express();
// const db = require('./db.js')
// const MenuItem = require('./models/menuitem');
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

// // GET request to retrieve all menu items
// app.get('/menu', async (req, res) => {
//     try {
//         const response = await MenuItem.find();
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// // POST request to add a new menu item
// app.post('/menu', async (req, res) => {
//     try {
//         const data = req.body;
//         const newMenu = new MenuItem(data);
//         const response = await newMenu.save();
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


