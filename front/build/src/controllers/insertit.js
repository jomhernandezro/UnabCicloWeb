"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.logic_evento = exports.logic_equipo = exports.logic_deporte = void 0;
var deporte_1 = __importDefault(require("../models/deporte"));
var equipo_1 = __importDefault(require("../models/equipo"));
var evento_1 = __importDefault(require("../models/evento"));
var logic_deporte = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var nombre, temporal;
    return __generator(this, function (_a) {
        nombre = (request === null || request === void 0 ? void 0 : request.body).nombre;
        temporal = new deporte_1["default"]({
            nombre: nombre
        });
        temporal.save()["catch"](function (err) {
            console.log(err);
            response.status(500).json("error al subir!");
        });
        response.json("todo ok");
        return [2 /*return*/];
    });
}); };
exports.logic_deporte = logic_deporte;
var logic_equipo = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var nombre, temporal;
    return __generator(this, function (_a) {
        nombre = (request === null || request === void 0 ? void 0 : request.body).nombre;
        temporal = new equipo_1["default"]({
            nombre: nombre
        });
        temporal.save()["catch"](function (err) {
            console.log(err);
            response.status(500).json("error al subir!");
        });
        response.json("todo ok");
        return [2 /*return*/];
    });
}); };
exports.logic_equipo = logic_equipo;
var logic_evento = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nombre, fecha, marcador, equipo1, equipo2, tipo_deporte, temporal;
    return __generator(this, function (_b) {
        _a = request === null || request === void 0 ? void 0 : request.body, nombre = _a.nombre, fecha = _a.fecha, marcador = _a.marcador, equipo1 = _a.equipo1, equipo2 = _a.equipo2, tipo_deporte = _a.tipo_deporte;
        temporal = new evento_1["default"]({
            nombre: nombre,
            fecha: fecha,
            marcador: marcador,
            equipo1: equipo1,
            equipo2: equipo2,
            tipo_deporte: tipo_deporte
        });
        temporal.save()["catch"](function (err) {
            console.log(err);
            response.status(500).json("error al subir!");
        });
        response.json("todo ok");
        return [2 /*return*/];
    });
}); };
exports.logic_evento = logic_evento;
//# sourceMappingURL=insertit.js.map