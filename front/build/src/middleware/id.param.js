"use strict";
exports.__esModule = true;
var verify = function (request, response, next) {
    var _id = (request === null || request === void 0 ? void 0 : request.body)._id;
    if (_id === undefined) {
        return response.status(400).json({ notice: "error", reason: "empty field" });
    }
    next();
};
exports["default"] = verify;
//# sourceMappingURL=id.param.js.map