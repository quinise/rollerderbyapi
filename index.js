require('dotenv').config();
const mongoose = require('mongoose');
const db = mongoose.connection;
const fs = require("fs/promises");
const express = require("express");
const bodyParser = require('body-parser');
const path = require("path")
// const cors = require("cors");
const _ = require("lodash");
const { default: axios } = require("axios");
const port = process.env.PORT !== undefined ? parseInt(process.env.PORT) : 3000;
const dbPW = process.env.DB_PASSWORD;
const dbUser = process.env.DB_USER;
const uri = `mongodb+srv://${dbUser}:${dbPW}@derby-api-cluster.6nrongd.mongodb.net/`

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.cors());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, "/")));
app.set('view engine', 'ejs');

app.listen(port, () => console.log(`Roller Derby API server is running on port ${port}...`));

async function connectToDb() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");;
    } catch (error) {
        console.error(error);
    }
}

connectToDb();
app.get("/", (req, res) => {
    res.render('home.ejs');
});

app.post("/makeQueryStructure", (req, res) => {
    res.send(req.body.queryParam_field);
    let queryParam = req.body.queryParam_field;
    console.log("queryParam: " + queryParam)
});

app.get("/docs/structure", (req, res) => {
    res.render('structure.ejs');
});

app.get("/docs/rules", (req, res) => {
    res.render('rules.ejs');
});

// TODO: add variable paramater for db query from user
app.get("/structure", (req, res) => {
    
    //TODO query the the MongoDB database
    // axios.get("http://localhost:4000/structureData.json")
    //     .then(response => {
    //         res.json(response.data);
    //     })
    //     .catch(err => {
    //         console.error("An error occured.");
    //         console.error(err);
    //         res.sendStatus(500);
    //     });

    res.header("Content-Type", 'application/json');
    res.sendFile(path.join(__dirname, 'structureData.json'));
});

app.get("/rules", (req, res) => {
    res.header("Content-Type", 'application/json');
    res.sendFile(path.join(__dirname, 'rulesData.json'));
});

app.use((req, res, next) => {
    res.status(404).render('error.ejs')
})