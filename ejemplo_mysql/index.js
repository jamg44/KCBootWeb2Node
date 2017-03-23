"use strict";

const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'didimo.es',
    user     : 'usuariocurso',
    password : 'us3r',
    database : 'cursonode'
});

connection.connect();

connection.query('SELECT * from agentes', function(err, rows, fields) {
    if (err) {
        console.log('Error en la consulta', err);
        process.exit(1);
    }
    for( let i = 0; i < rows.length; i++) {
        const agente = rows[i];
        console.log(agente.idagentes, agente.name, agente.age);
    }
});

connection.end();