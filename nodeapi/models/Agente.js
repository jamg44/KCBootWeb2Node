"use strict";


const mongoose = require('mongoose');

// primero definimos un esquema

const agenteSchema = mongoose.Schema({
    name: String,
    age: Number
});

// Creamos un método estático para recuperar agentes paginados
agenteSchema.statics.list = function(filter, cb) {
    const query = Agente.find(filter);
    query.exec(cb);
};

// y luego creamos el modelo
var Agente = mongoose.model('Agente', agenteSchema);

// no necesitamos exportar el modelo ya que podriamos recuperarlo
// en cualquier momento con:
// var Agente = mongoose.model('Agente');
