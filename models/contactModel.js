const mongoose = require('mongoose');

const contactModel = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        minLength: 10
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    dob: {
        type: Date,
        required: true,
    }

}, { timestamps: true })


module.exports = mongoose.model("Contact", contactModel);