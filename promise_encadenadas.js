"use strict";

// Funciones que devuelven promesas

function conArroz(plato) {
    return new Promise(function(resolve, reject) {
        resolve(plato + ' arroz');
    });
}

function conAjo(plato) {
    return new Promise(function(resolve, reject) {
        resolve(plato + ' ajo');
    });
}

function con(plato, ingrediente) {
    return new Promise(function(resolve, reject) {
        resolve(plato + ' ' + ingrediente);
    });
}

// encadenar promesas

var paella = 'paella con';

conArroz(paella)  // function que retorna promesa
    .then( conAjo)
    .then( function(plato) {
        return con(plato, 'pollo');
    }).then(function(plato) {
        console.log(plato);
        return 'queso';
    }) // then() devuelve una promesa que resuelve al return anterior
    .catch(function(err) {
        console.log('Error', err);
    })
    // tambien puedo encadenar mas acciones tras haber fallado
    .then(function(queesesto) {
        console.log('queesesto', queesesto);
    });
