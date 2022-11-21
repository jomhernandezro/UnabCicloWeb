"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
mongoose_1["default"].Promise = global.Promise;
mongoose_1["default"].connect(process.env.DB_ADDRESS, { ignoreUndefined: true })
    .then(function (res) {
    if (res)
        console.log("-> conectado a la base de datos");
})["catch"](function (err) {
    if (err)
        console.log(err);
});
exports["default"] = {
    db: mongoose_1["default"]
};
//# sourceMappingURL=mongodb.js.map