"use strict";
var mongoose_1 = require("mongoose");
var EventoScheme = new mongoose_1.Schema({
    nombre: {
        type: String,
        require: true
    },
    fecha: String,
    marcador: String,
    equipo1: String,
    equipo2: String,
    tipo_deporte: String
});
module.exports = (0, mongoose_1.model)("Evento", EventoScheme);
//# sourceMappingURL=evento.js.map