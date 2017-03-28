"use strict";

const basicAuth = require('basic-auth');

module.exports = function(req, res, next) {

    // intentamos extraer un usuario de la petición (header)
    const user = basicAuth(req);

    // si tenemos el usuario y las credenciales son correctas
    // dejamos pasar, si no respondemos pidiendo credenciales
    if (!user || user.name !== 'admin' || user.pass !== '12345') {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        res.send(401);
        return;
    }
    next();
};
