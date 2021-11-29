const mongoose = require("mongoose")

const petsSchema = mongoose.Schema({
    img: Image,
    header: String,
    description: String,
    user: {
        ref: "Pet",
        type: mongoose.Schema.Types.ObjectId
    },
    category: {
        ref: "Pet",
        type: mongoose.Schema.Types.ObjectId
    }
})

const Pets = mongoose.model("Pet", petsSchema)

module.exports = Pets