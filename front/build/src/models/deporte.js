"use strict";
var mongoose_1 = require("mongoose");
var DeporteScheme = new mongoose_1.Schema({
    nombre: {
        type: String,
        require: true
    }
});
module.exports = (0, mongoose_1.model)("Deporte", DeporteScheme);
//# sourceMappingURL=deporte.js.map