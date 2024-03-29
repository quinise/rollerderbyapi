// This file provides the app with Firebase credentials and access to the project's Firebase Database
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./creds.json');

// init firebase app
initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = { db }
