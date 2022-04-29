// Requiring Modules.
const mongoose = require('mongoose');

//Schema for Data.

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: String,
    status: String
});

//iiiiiiii;
const userDB = mongoose.mongoose.model('userDB', schema);

// Exporting Module.
module.exports = userDB;