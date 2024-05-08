const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.get('/',function(req,res){
    res.send('Welcome to my hotel.. How can i help u ?');
});

//Import the Router Files
const personRoutes = require('./routes/personRoute');
const menuRoutes = require('./routes/menuRoute');
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);


app.listen(3000,()=>{
    console.log('Listening on port 3000');
});