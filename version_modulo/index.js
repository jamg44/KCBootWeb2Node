"use strict";

const fs = require('fs');
const path = require('path');

// función que devuelve la version de un módulo
const versionModulo = function(nombreModulo, callback) {
    const fichero = path.join('./node_modules', nombreModulo, 'package.json');

    fs.readFile(fichero, 'utf8', function(err, data) {
        if (err) {
            callback(err);
            return;
        }

        // parsear data como un objeto
        const packageJson = JSON.parse(data);

        callback(null, packageJson.version);

    });
};


versionModulo('chance', function(err, str) {
    if (err) {
        console.error('Hubo un error: ', err);
        return;
    }
    console.log('La version del módulo es:', str);
});

