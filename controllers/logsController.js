const Logs = require('../models/Logs');

exports.createLogs = async (req, res) => {
    const { name, email, floor } = req.body;
    const log = new Logs({ name, email, floor });
    log.save().then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json(err)
    })
}

exports.getLogs = async (req, res) => {
    Logs.find().then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err)
    })
}