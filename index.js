require('dotenv').config();
const cors = require('cors');
const express = require("express");
const bodyParser = require('body-parser');
const path = require("path")
const port = process.env.PORT !== undefined ? parseInt(process.env.PORT) : 3000;
const app = express();
const { db } = require('./firebase.js')
const functions = require('firebase-functions');

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

app.get("/api/officials", async (req, res) => {
    const officialsRef = db.collection('OfficialInstances');
    const snapshot = await officialsRef.get();

    if (snapshot.empty) {
        console.log('No matching documents');
        return;
    }

    let docs = [];
    snapshot.forEach(doc => {
        docs.push(doc.data());
    });
    
    const criteria = req.query.criteria;
    if (criteria) {
        docs = docs.filter(official => {
          return (official.firstName.includes(criteria) || official.lastName.includes(criteria));
        });
    }

    res.status(200).send(docs);
})

app.get("/api/rules", async (req, res) => {
    const rulesRef = db.collection('rules').doc('eFgAZAFIzr8mdkmVRxZt');
    const doc = await rulesRef.get();
    
    if (!doc.exists) {
        return res.sendStatus(400);
    }

    res.status(200).send(doc.data());
});

app.get("/api/structure", async (req, res) => {
    const structureRef = db.collection('structure').doc('bR9o2x7D1TfVQUFOOKI8');
    const doc = await structureRef.get();
    
    if (!doc.exists) {
        return res.sendStatus(400);
    }

    res.status(200).send(doc.data());
});

app.get("/api/officialTypes", async (req, res) => {
    const officialTypesRef = db.collection('officials').doc('9QwCOdURB7BwMFV1NtWN');
    const doc = await officialTypesRef.get();
    
    if (!doc.exists) {
        return res.sendStatus(400);
    }

    res.status(200).send(doc.data());
});

app.use((req, res, next) => {
    res.status(404).render('error.ejs')
})

// const start = async() => {
//     try{
//         app.listen(port, () => console.log(`Roller Derby API server is running on port ${port}...`));
//     } catch (err) {
//         console.log(err.message)
//     }
// }

// start();

exports.app = functions.https.onRequest(app);