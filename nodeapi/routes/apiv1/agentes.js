"use strict";

const express = require('express');
const router = express.Router();

// Cargamos mongoose y el modelo de Agente
const mongoose = require('mongoose');
const Agente = mongoose.model('Agente');

// autenticación con http basic authentication
const basicAuth = require('../../lib/basicAuth');
router.use(basicAuth);

// GET - devuelve una lista de agentes
router.get('/', function(req, res, next) {

    const name = req.query.name;
    const age = req.query.age;
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);
    const fields = req.query.fields;
    const sort = req.query.sort;

    const filter = {};

    if (name) {
        filter.name = name;
    }

    if (age) {
        filter.age = age;
    }

    Agente.list(filter, limit, skip, fields, sort, function(err, rows) {
        if (err) {
            return next(err);
        }
        res.json({success: true, result: rows});
    });
});

// GET - recupera un agente por id
router.get('/:id', function(req, res, next) {
    const query = Agente.findOne({_id: req.params.id});
    query.exec(function(err, agente) {
        if (err) {
            return next(err);
        }
        if (!agente) {
            return res.status(404).json({success: false});
        }
        res.json({success: true, result: agente});
    });
});

// POST - crear un agente
router.post('/', function(req, res, next) {
    console.log(req.body);
    const agente = new Agente(req.body);
    agente.save(function(err, agenteGuardado) {
        if (err) {
            return next(err);
        }
        res.json({success: true, result: agenteGuardado});
    });
});

// PUT - actualizar un agente por id
router.put('/:id', function(req, res, next) {
    // recogemos el id
    const id = req.params.id;
    const agente = req.body;
    Agente.update({_id: id}, agente, function(err) {
        if (err) {
            return next(err);
        }
        res.json({success: true});
    });
});

// DELETE - eliminar un agente por id
router.delete('/:id', function(req, res, next) {
    // recogemos el id
    const id = req.params.id;
    Agente.remove({_id: id}, function(err) {
        if (err) {
            return next(err);
        }
        res.json({success: true});
    });
});

module.exports = router;