//Functions to render services.

// Rendering the home page.
exports.homeRoute = (req, res) => {
    res.render('index');
}

//Rendering the Add user form.
exports.addUser = (req, res) => {
    res.render('add_user');
}

// Rendering the Update user form.
exports.updateUser = (req, res) => {
    res.render('update_user');
}