// Importing Modules.
const mongoose = require('mongoose');

// Connections
const connectMongoDB = () => {
    try {
        //     Connection point.
        mongoose.connect('mongodb://localhost:27017', {
            useNewUrlParser: true,
        }, err => {
            if (!err) {
                console.log('Connected to database successfully ...')
            } else {
                console.log('Failed to connect to database')
            }
        });

    } catch (err) {
        console.log('Connection Failure: ' + err.message);
    }
};

// Export connection.
module.exports = connectMongoDB;