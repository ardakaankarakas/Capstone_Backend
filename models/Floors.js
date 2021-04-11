const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FloorSchema = new Schema({
    floor: {
        type: String,
        required: [true, '{PATH} is necessary.'],
    }
});

module.exports = mongoose.model('Floors', FloorSchema);