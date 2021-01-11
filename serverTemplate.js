/*Set i up*********/
// ls = list windows dir list what is in folder
//use cd to navigate folders (change directory)
//npm init generates package.json file
//npm install nodemon -save
//add script to rename -see kickoff
//npm install express mongoose react -save


//require mongoose- translates built in to  Node.JS
const mongoose = require('mongoose'); 
mongoose.set('useFindAndModify', false);

const bodyParser = require('body-parser');

//call in Schemas models
/***** PUT SCHEMAS HERE***** */

//require express
const express = require('express');

//add path library
const path = require ('path');
//const { update } = require('./Models/ToDoItem.js');

//grants access to all that express has to offer
const app = express();

//declare port we want to connect to
const port = 3000;



//connect to the cluster I created in Atlas
const mongoDB = "";

//accessing the connect method of mongoose
//pass it the name of the DB cluster we have created
//mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) return console.error(err);
    console.log('Connected to database');
    });
const db = mongoose.connection;

//turns on the connection
db.on('error', console.error.bind(console, 'connection error:'));

//use the following middlware
app.use(
    //middleware for delivering static files
    express.static(
        //uses path library to take care of relative paths
        path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//open up server, list on specific id and port
//ip address aka hostnames
app.listen(port, function(){
    console.log("Server is running at " + port)
});