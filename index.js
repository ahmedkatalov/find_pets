const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
require('dotenv').config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use(require('./routes'))


mongoose.connect(process.env.MONGO_SERVER)
    .then(()=>{
        console.log("Mongo connect")
        app.listen(port, ()=>{
            console.log("server start")
        })
    })
    .catch((error) =>{
        console.log("error connect Mongo")
    })