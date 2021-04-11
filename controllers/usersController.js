const Users = require('../models/Users');

exports.createUser = async (req, res) => {
    const { name, password, email } = req.body;
    const user = new Users({ name, password, email });
    user.save().then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json(err)
    })
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    Users.find({ email, password }).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err)
    })
}