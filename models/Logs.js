const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
    name: {
        type: String,
        required: [true, '{PATH} is necessary.'],
    },
    email: {
        type: String,
        required: [true, '{PATH} is necessary.'],
    },
    floor: { 
        type: String,
        required: [true, '{PATH} is necessary.'],
    }
});

module.exports = mongoose.model('Logs', LogSchema);