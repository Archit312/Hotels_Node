const mongoose = require('mongoose');
require('dotenv').config();
//Mongo Db URL

// const mongoURL = 'mongodb://localhost:27017/hotels';

const mongoURL = process.env.DB_URL;

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('MongoDb Connected');
});

db.on('error',(err)=>{
    console.log('MongoDb Error:',err);
});

db.on('disconnected',()=>{
    console.log('MongoDb DisConnected');
});

module.exports = db;