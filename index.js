const fs = require("fs/promises");
const express = require("express");
const path = require("path")
// const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();
app.use(express.json());
// app.use(express.cors());
app.use(express.static(path.join(__dirname, "/")));
app.set('view engine', 'ejs');

app.listen(3000, () => console.log("Roller Derby API server is running..."));

app.get("/", (req, res) => {
    res.render('home.ejs');
});

app.get("/docs/structure", (req, res) => {
    res.render('structure.ejs');
});

app.get("/docs/rules", (req, res) => {
    res.render('rules.ejs');
});

app.get("/structure", (req, res) => {
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