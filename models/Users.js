const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, '{PATH} is necessary.'],
    },
    email: {
        type: String,
        required: [true, '{PATH} is necessary.'],
    },
    password: { 
        type: String,
        required: [true, '{PATH} is necessary.'],
    }
});

module.exports = mongoose.model('Users', UserSchema);