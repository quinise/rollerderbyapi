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
const { async } = require('rxjs');
const client = new MongoClient(uri);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, "/")));
app.set('view engine', 'ejs');

// async function init() {
//     await client.db("derbyApi_db").collection("officialInstances").createIndex(
//         {
//           firstName: "text",
//           lastName: "text"
//         }
//       );
// }

// init();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,  X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})

app.get("/api/officials", async (req, res) => {
    let result = null;
    const criteria = req.query.criteria;
    console.log(criteria);

    try {
        await client.connect();

        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });
        // let find = {};
        // if (criteria) {
        //     find =  { $text: { $search: criteria } };
        // }

        result = await client.db("derbyApi_db").collection("officialInstances").find({}).toArray();
        if (criteria) {
            result = result.filter(official => {
                return (official.firstName.includes(criteria) || official.lastName.includes(criteria))
            });
        }
        
        res.json({"data": result});
    } catch(err) {
        console.log("Error: " +  err);
    } finally {
        await client.close();
        // console.log("Disconnected (from database) successfully to server");
    }
})

app.get("/api/rules", async (req, res) => {
    let result = null;
    try {
        await client.connect();

        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });

        result = await client.db("derbyApi_db").collection("rules").find({}).toArray();
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

        result = await client.db("derbyApi_db").collection("structure").find({}).toArray();
    } catch(err) {
        console.log("Error: " +  err);
    } finally {
        await client.close();
        // console.log("Disconnected (from database) successfully to server");
    }

    return res.json({ data: result })
});

app.get("/api/officialTypes", async (req, res) => {
    let result = null;
    try {
        await client.connect();

        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });

        result = await client.db("derbyApi_db").collection("officials").find({}).toArray();
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