//functions

// const { json } = require("express")

// console.log('server is running');
// function add(a,b){
//     return a+b;
// }

// var add = function(a,b){
//     return a+b
// }

// var add=(a,b)=>{
//     return a+b
// }

// var add=(a,b)=>a+b
// var result= add(4,5)
// console.log(result);

// (function(){
//     console.log("tarun is developer");

// })()

//callback functions

// function callback(){
//     console.log("i am calling a callback function");
//     console.log("i am learning the callback function");

// }
// const add = function(a,b,callback){
//     var result=a+b;
//     console.log('result:'+result);
//     callback()
// }
// add(3,4,callback)

// const add = function(a,b,callback){
//         var result=a+b;
//         console.log('result:'+result);
//         callback()
//     }
// add(3,4,function(){
//     console.log("add is completed"); 
// })
// add(2,3,()=>console.log("add completed"))

// fs and os

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo()
// console.log(user);

// fs.appendFile('greeting.txt',"hi user:"+user.username+"!\n",()=>{
//     console.log("hi i am user");

// })

//import and connection of two and more js files
// lodash

// const notes = require('./notes.js');
// var _ = require('lodash');

// var age = notes.age
// console.log(age);
// var result = notes.addnumber(age+10,20)
// console.log(result);

// var data = ["person", "person", 1,2,1,'name','age','2']
// var filter = _.uniq(data)
// console.log(filter);
// console.log(_.isString(4))

// json conversion 
// const object =  {
//     name : "tarun",
//     age : 24,
//     work : "developer"
// }
// const json1 = JSON.stringify(object)
// console.log(json1)
// console.log(typeof json1)


// const json1 = '{"name": "tarun", "age":24, "work":"developer"}'
// const object1 = JSON.parse(json1)
// console.log(object1)

// express
const express = require('express');
const app = express();

// Database connection
const db = require('./db');

// Body parser (using built-in Express middleware)
app.use(express.json());

// Import routes
const personroutes = require('./routes/personroutes');
app.use('/person', personroutes);


//get function
// app.get('/', function (req, res) {
//     res.send('Hello World')
// })
// app.get('/paneer', function(req,res){
//     var customize_paneer={
//         name:"paneer",
//         price:100,
//         is_chutney:true,
//         is_extraspaicy:false
//     }
//     res.send(customize_paneer)
// })
//post function
// app.post('/person', async (req, res) => {
//     try {
//         const data = req.body
//         const newPerson = new Person(data)
//         const response = await newPerson.save()
//         console.log('data saved')
//         res.status(200).json(response)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

// //get method
// app.get('/person', async (req, res) => {
//     try {
//         const response = await Person.find()
//         console.log("data fetched");
//         res.status(200).json(response)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })


// app.get('/person/:worktype', async(req, res) => {
//     try {
//         const worktype = req.params.worktype
//         if (worktype == 'backend' || worktype == 'frontend' || worktype == 'fullstack') {
//           const result = await person.find({work:worktype})
//           console.log("response fetched");
//           res.status(200).json(result)
//         }
//         else{
//             res.status(400).send('Invalid worktype')
//         }
//     } catch (err) {
//         res.status(400).send(err)

//     }
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


