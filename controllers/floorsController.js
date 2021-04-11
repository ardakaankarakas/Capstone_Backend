const Floors = require('../models/Floors');

exports.createFloor = async (req, res) => {
    const { floor } = req.body;
    const floor_no = new Floors({ floor });
    floor_no.save().then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json(err)
    })
}

exports.getFloor = async (req, res) => {
    const { floor } = req.body;
    Floors.find({ floor }).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err)
    })
}