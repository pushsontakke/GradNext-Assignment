const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    emailOpened: {
        type: Boolean,
        default: false
    },
    clickedLink: {
        type: Boolean,
        default: false
    },
    paymentComplete: {
        type: Boolean,
        default: false
    },
    followUpCount: {
        type: Number,
        default: 0
    },
    lastFollowUp: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);