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
