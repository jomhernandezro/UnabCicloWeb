"use strict";
var body_check_params = function (request, response, next) {
    var _a = request === null || request === void 0 ? void 0 : request.body, usuario = _a.usuario, clave = _a.clave;
    if (!usuario || !clave)
        return response.status(400).json("datos incompletos");
    next();
};
module.exports = body_check_params;
//# sourceMappingURL=auth.params.js.map