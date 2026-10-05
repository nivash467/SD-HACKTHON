const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, // Will store hashed password
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);
