"use strict";

const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const router = express.Router();
const localConfig = require('../../localConfig');

const Usuario = mongoose.model('Usuario');

// POST - autenticacion de usuarios
router.post('/autheticate', function(req, res, next) {

    // recogemos credenciales
    const userName = req.body.username;
    const password = req.body.password;

    // Buscamos en la base de datos
    Usuario.findOne({email: userName}).exec(function(err, user) {
        if (err) {
            return next(err);
        }

        // si encontramos el usuario
        if (!user) {
            return res.json({succes: false, error: 'Usuario no encontrado'});
        }

        // comprobamos su password
        if (password !== user.password) {
            return res.json({succes: false, error: 'Password erronea'});
        }

        // creamos un token
        jwt.sign({ user_id: user._id}, localConfig.jwt.secret, {
            expiresIn: localConfig.jwt.expiresIn
        }, function(err, token) {
            // respondemos al usuario dándole el token
            res.json({success: true, token});
        });
    });


});

module.exports = router;
