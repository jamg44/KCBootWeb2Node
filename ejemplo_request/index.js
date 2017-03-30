"use strict";

const request = require('request');

// hacemos una petición a StarWars API

const options = {
    method: 'GET', // no es necesario
    url: 'https://swapi.co/api/people/1',
    json: true
};

request(options, function(err, respuestaCompleta, body) {
    if (err || respuestaCompleta.statusCode >= 400) {
        console.log('Error en la petición',
            err,
            respuestaCompleta.statusCode);
        return;
    }
    console.log(body.name, 'es del planeta');
    request({url: body.homeworld, json:true}, function( err, resp, body) {
        if (err || respuestaCompleta.statusCode >= 400) {
            console.log('Error en la petición',
                err,
                respuestaCompleta.statusCode);
            return;
        }
        console.log(body.name);
    });
});