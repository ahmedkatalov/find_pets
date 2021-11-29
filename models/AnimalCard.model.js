const mongoose = require("mongoose")

const animalCardSchema = mongoose.Schema({
    img: String,
    header: String,
    description: String
})

const AnimalCard = mongoose.model("AnimalCard", animalCardSchema)

module.exports = AnimalCard