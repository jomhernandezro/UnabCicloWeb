"use strict";
exports.__esModule = true;
exports.evento = exports.equipo = exports.deporte = void 0;
var deporte = function (request, response, next) {
    var nombre = (request === null || request === void 0 ? void 0 : request.body).nombre;
    if (nombre === undefined) {
        return response.status(400).json({ notice: "error", reason: "empty field" });
    }
    next();
};
exports.deporte = deporte;
var equipo = function (request, response, next) {
    var nombre = (request === null || request === void 0 ? void 0 : request.body).nombre;
    if (nombre === undefined) {
        return response.status(400).json({ notice: "error", reason: "empty field" });
    }
    next();
};
exports.equipo = equipo;
var evento = function (request, response, next) {
    var _a = request === null || request === void 0 ? void 0 : request.body, nombre = _a.nombre, fecha = _a.fecha, marcador = _a.marcador, equipo1 = _a.equipo1, equipo2 = _a.equipo2, tipo_deporte = _a.tipo_deporte;
    if (nombre === undefined || fecha === undefined || marcador === undefined || equipo1 === undefined || equipo2 === undefined || tipo_deporte === undefined) {
        return response.status(400).json({ notice: "error", reason: "empty field" });
    }
    next();
};
exports.evento = evento;
//# sourceMappingURL=insert.js.map