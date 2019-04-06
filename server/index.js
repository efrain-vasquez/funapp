//express is a middleware of node
var express = require('express');
//
var bodyParser = require('body-parser');
//
var path = require('path');



var app = express();


//bodyParser has a method called json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//this is joining front end to the server
app.use(express.static(path.join(__dirname, '../public')))

//if didnt have a public folder or the path was wrong it will have an error but it will at least display Hello World.
//test for me to know if server is running or not
app.get('/', function(req, res){
  res.send('Hello World');
});



app.listen(3000, function(){
  //this is so i can see it in my terminal
  console.log('Server Started on Port 3000....');
})

//we start by doing npm install
//we create package.json file using command on terminal  npm init
//when ever see error on terminal that says can not find module it means either dont have library installed or the path is wrong
//we install stuff on package.json file by putting them directly on package.json file or on the terminal
//to install latest version of something use "name of library" : " * " on package.json file directly
//on terminal npm install name of library -s
//when you require something must be spelled exactly the same as what is on the package.json file

//we start by creating the project 
