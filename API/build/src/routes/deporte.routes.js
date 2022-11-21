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
var express_1 = require("express");
var auth_1 = __importDefault(require("../middleware/auth"));
var id_param_1 = __importDefault(require("../middleware/id.param"));
var insert_params = __importStar(require("../middleware/insert"));
var getters = __importStar(require("../controllers/recollectit"));
var insertit = __importStar(require("../controllers/insertit"));
var getit = __importStar(require("../controllers/getit"));
var deleteit = __importStar(require("../controllers/deleteit"));
var route = (0, express_1.Router)();
route.post("/", auth_1["default"], insert_params.deporte, insertit.logic_deporte);
route.get("/all", auth_1["default"], getters.logic_deporte);
route.get("/", auth_1["default"], id_param_1["default"], getit.logic_deporte);
route.put("/", auth_1["default"], insert_params.deporte, insertit.logic_deporte);
route["delete"]("/", auth_1["default"], id_param_1["default"], deleteit.logic_deporte);
module.exports = route;
//# sourceMappingURL=deporte.routes.js.map