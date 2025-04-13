const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
    },
    contact: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contact"
    }]
})


module.exports = mongoose.model("User", userSchema);