require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
const path = require("path")
const port = process.env.PORT !== undefined ? parseInt(process.env.PORT) : 3000;
const dbPW = process.env.DB_PASSWORD;
const dbUser = process.env.DB_USER;
const uri = `mongodb+srv://${dbUser}:${dbPW}@derby-api-cluster.6nrongd.mongodb.net/?retryWrites=true&w=majority`;
const Structure = require('./models/structure');
const app = express();
const { MongoClient } = require('mongodb');
const { default: cli } = require('@angular/cli');
const client = new MongoClient(uri);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, "/")));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('home.ejs');
});

// TODO input from angular to search in structure endpoint
app.get("/api/structure", async (req, res) => {
    let result = null;
    try {
        await client.connect();

        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });

        result = await client.db("derbyApi_db").collection("structure").find({}).toArray();
        console.log("result: " + result);
        res.send({"structure": result});
    } catch(err) {
        console.log("Error: " +  err);
    } finally {
        await client.close();
        console.log("Disconnected (from database) successfully to server");

    }
    // const result = (await Structure.find({}));

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

const start = async() => {
    try{
        await mongoose.connect(uri);

        app.listen(port, () => console.log(`Roller Derby API server is running on port ${port}...`));
    } catch (err) {
        console.log(err.message)
    }
    
}

start();