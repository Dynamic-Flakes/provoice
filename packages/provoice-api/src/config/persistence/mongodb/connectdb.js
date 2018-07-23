import mongoose from 'mongoose';
import config from '../../config';

const db = `${config.get('mongo.host')}/${config.get('mongo.database')}`;

// Connecting to Database
mongoose.connect(db);
// Checking if connection to db was successful
mongoose.connection.on('connected', () => {
    console.log('Mongoose successfully connected to database URL: '+db);
});

mongoose.connection.on('error', (err) => {
    console.error("Mongoose connection error occurred. Error: " + err);
});

mongoose.connection.on('disconnected', () => {
    console.log("Mongoose connection lost...");
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log("Mongoose connection closed...");
        process.exit(0);
    });
});

export default mongoose;
