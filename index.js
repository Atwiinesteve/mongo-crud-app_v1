// Requiring Modules.
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

// Getting configurations.
dotenv.config({ path: 'config.env' });

// Application Setup.
const app = express();
const PORT = process.env.PORT || 3030;

// Application Middlewares.
app.use(morgan('tiny')); // Log Requests.
app.use(bodyParser.urlencoded({ extended: true })); // Parse requests to body-parser.

// Setup View Engine.
app.set('view engine', "ejs");
// app.set('views', path.resolve(__dirname, ""))

// Load Assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

// Test Route
// app.get('/', (req, res) => { res.send('Server CRUD Application.') })
app.get('/', (req, res) => {
    res.render('index');
});

// Connecting to the Add User form.
app.get('/add-user', (req, res) => {
    res.render('add_user');
});

// Updating User..
app.get('/update-user', (req, res) => {
    res.render('update_user');
})

// Server Initialization.
app.listen(PORT, () => { console.log(`Server Application Running at http://localhost:${PORT}`) })