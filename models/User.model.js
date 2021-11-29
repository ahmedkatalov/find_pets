const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    pets: [{
        ref: "Pet",
        type: mongoose.Schema.Types.ObjectId
    }]

})

const User = mongoose.model("User", userSchema)

module.exports = User