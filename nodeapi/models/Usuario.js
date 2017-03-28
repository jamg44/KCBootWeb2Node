"use strict";

const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    email: String,
    password: String
});

var Usuario = mongoose.model('Usuario', usuarioSchema);

/*const usuario = new Usuario({
    email: 'admin@example.com',
    password: '1234'
});

usuario.save();*/