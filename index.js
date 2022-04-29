// Requiring Modules.
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

// Importing MongoDB Connection.split
const connectMongoDB = require('./server/database/connection.js')

// Getting configurations.
dotenv.config({ path: 'config.env' });

// Application Setup.
const app = express();
const PORT = process.env.PORT || 3030;

// Application Middlewares.
app.use(morgan('tiny')); // Log Requests.
app.use(bodyParser.urlencoded({ extended: true })); // Parse requests to body-parser.

// MongoConnected
connectMongoDB()

// Setup View Engine.
app.set('view engine', "ejs");
// app.set('views', path.resolve(__dirname, ""))

// Load Assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

// Routes Middleware.
app.use('/', require('./server/routes/router.js'));


// Server Initialization.
app.listen(PORT, () => { console.log(`Server Application Running at http://localhost:${PORT}`) })