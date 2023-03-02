require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./route/route")
const uploadconteoller = require("./controllers/Uploadcontroller")

const app = express();

// db connecting
mongoose.connect("mongodb+srv://functionup-cohert:yCRgEggIFfjlaB8o@sl0yd7n.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// to serve images inside public folder
app.use('/images', express.static('public/images'));

app.use("/", route);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("Server has been started"));