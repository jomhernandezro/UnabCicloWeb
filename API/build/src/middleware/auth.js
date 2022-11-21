"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var body_auth_func = function (request, response, next) {
    var token = request.headers["access-token"];
    if (!token)
        return response.status(400).json("error de token");
    jsonwebtoken_1["default"].verify(token, process.env.TOKEN, function (error) {
        if (error)
            return response.status(404).json("error de token");
        else
            next();
    });
};
exports["default"] = body_auth_func;
//# sourceMappingURL=auth.js.map