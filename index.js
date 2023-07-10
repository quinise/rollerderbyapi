require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const express = require("express");
const bodyParser = require('body-parser');
const path = require("path")
const port = process.env.PORT !== undefined ? parseInt(process.env.PORT) : 3000;
const dbPW = process.env.DB_PASSWORD;
const dbUser = process.env.DB_USER;
const uri = `mongodb+srv://${dbUser}:${dbPW}@derby-api-cluster.6nrongd.mongodb.net/?retryWrites=true&w=majority`;
const app = express();
const { MongoClient } = require('mongodb');
const client = new MongoClient(uri);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, "/")));
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,  X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})

app.get("/api/rules", async (req, res) => {
    let result = null;
    try {
        await client.connect();

        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });

        result = await client.db("derbyApi_db").collection("rules").find({"description" : "Flat Track Roller Derby is played on a flat, oval track. Play is broken up into two 30-minute periods, and within those periods, into units of play called “Jams,” which last up to two minutes. \\n During a Jam, each team fields up to five Skaters. Four of these Skaters are called “Blockers” (together, the Blockers are called the “Pack”), and one is called a “Jammer.” The Jammer wears a helmet cover with a star on it. \\n The two Jammers start each Jam behind the Pack, and score a point for every opposing Blocker they lap, each lap. Because they start behind the Pack, they must get through the Pack, then all the way around the track to be eligible to score points on opposing Blockers."}).toArray();
        res.json({"data": result});
    } catch(err) {
        console.log("Error: " +  err);
    } finally {
        await client.close();
        // console.log("Disconnected (from database) successfully to server");
    }
});

app.get("/api/structure", async (req, res) => {
    let result = null;
    try {
        await client.connect();

        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });

        result = await client.db("derbyApi_db").collection("structure").find({"flat_track.womens_derby.governing_body" : "Women's Flat Track Derby Association"}).toArray();
    } catch(err) {
        console.log("Error: " +  err);
    } finally {
        await client.close();
        // console.log("Disconnected (from database) successfully to server");
    }

    return res.json({ data: result })
});

app.get("/api/officials", async (req, res) => {
    let result = null;
    try {
        await client.connect();

        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });

        result = await client.db("derbyApi_db").collection("officials").find({"program_certifications.Level_1" : "Other/Regulation Play"}).toArray();
        res.json({ data: result });
    } catch(err) {
        console.log("Error: " +  err);
    } finally {
        await client.close();
        // console.log("Disconnected (from database) successfully to server");
    }
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