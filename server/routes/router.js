// Routes Connecting to the Frontend.

// Requiring Modules.
const express = require('express');

// Requiring Routes.
const { homeRoute, addUser, updateUser } = require('../services/render.js');

// Main Route setup.....
const router = express.Router();

// Test Route
// app.get('/', (req, res) => { res.send('Server CRUD Application.') })
router.get('/', homeRoute);

// Connecting to the Add User form.
router.get('/add-user', addUser);

// Updating User..
router.get('/update-user', updateUser);

// Exporting Routes.
module.exports = router;