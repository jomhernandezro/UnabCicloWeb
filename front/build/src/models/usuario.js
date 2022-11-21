"use strict";
var mongoose_1 = require("mongoose");
var UserScheme = new mongoose_1.Schema({
    usuario: {
        type: String,
        require: true
    },
    clave: {
        type: String,
        require: true
    },
    rol: {
        type: Number,
        required: true
    }
});
module.exports = (0, mongoose_1.model)("User", UserScheme);
//# sourceMappingURL=usuario.js.map