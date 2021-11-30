const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        default: "Im title, click here me"
    }
})

const Category = mongoose.model("Category", categorySchema)

module.exports = Category