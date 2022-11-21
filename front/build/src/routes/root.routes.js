"use strict";
exports.__esModule = true;
var express_1 = require("express");
var route = (0, express_1.Router)();
route.all("/", function (req, res, next) {
    res.json("CICLO 4 | API BY: EQUIPO KEVIN B. & JHON A.");
});
module.exports = route;
//# sourceMappingURL=root.routes.js.map