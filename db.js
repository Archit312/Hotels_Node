const mongoose = require('mongoose');

//Mongo Db URL

const mongoURL = 'mongodb://localhost:27017/hotels';

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