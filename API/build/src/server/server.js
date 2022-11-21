"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var mongodb_1 = __importDefault(require("../connections/mongodb"));
var routes = __importStar(require("./routes.map.json"));
dotenv_1["default"].config();
var server = (0, express_1["default"])();
if (!mongodb_1["default"])
    console.log("error database [connection]");
server.use((0, helmet_1["default"])());
server.disable('x-powered-by');
server.use((0, cors_1["default"])());
server.use(express_1["default"].json());
server.use(express_1["default"].urlencoded({ extended: true }));
server.set("PORT", process.env.PORT || 3000);
server.use("/", require(routes.root));
server.use("/api", require(routes.root));
server.use("/api/auth", require(routes.auth));
server.use("/api/deporte", require(routes.deporte));
server.use("/api/equipo", require(routes.equipo));
server.use("/api/evento", require(routes.evento));
server.listen(server.get("PORT"), function () {
    console.log("servidor conectado, puerto en uso: ", server.get("PORT"));
});
//# sourceMappingURL=server.js.map