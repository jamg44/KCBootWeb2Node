"use strict";

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/cursonode', function(err, db) {
    if (err) {
        console.log('Error', err);
        return process.exit(1);
    }
    db.collection('agentes').find().toArray(function(err, rows) {
        if (err) {
            console.log('Error', err);
            return process.exit(1);
        }
        console.log(rows);
        db.close();
    });
});