const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const path = require("path")
require('dotenv').config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use(require('./routes'))
app.use('/uploads', express.static('uploads'))

app.use(express.static(path.resolve(__dirname, "client", "build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

mongoose.connect(process.env.MONGO_SERVER, )
    .then(()=>{
        console.log("Mongo connect")
        app.listen(port, ()=>{
            console.log("server start")
        })
    })
    .catch((error) =>{
        console.log("error connect Mongo")
    })
