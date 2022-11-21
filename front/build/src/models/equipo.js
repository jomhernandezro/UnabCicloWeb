"use strict";
var mongoose_1 = require("mongoose");
var EquipoScheme = new mongoose_1.Schema({
    nombre: {
        type: String,
        require: true
    }
});
module.exports = (0, mongoose_1.model)("Equipo", EquipoScheme);
//# sourceMappingURL=equipo.js.map