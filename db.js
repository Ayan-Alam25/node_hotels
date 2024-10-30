const mongoose = require('mongoose');

// define mongodb connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'

// set up mongoDB connection 
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

// get the default connection
const db = mongoose.connection;

// define event listeners for database connection

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error', err)
});

db.on('disconnected', ()=> {
    console.log('MongoDB Disconnected');
});

// export database connection 

module.exports = db;