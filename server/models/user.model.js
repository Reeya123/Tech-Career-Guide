const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        required: false,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
      required: true,
      type: String
    },
    token: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchema)