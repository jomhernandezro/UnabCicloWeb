"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var crypto_1 = __importDefault(require("crypto"));
//modulo de encryptacion SHA256  ~_~ 
/* The SHA256 class takes a string and returns a string. */
var SHA256 = /** @class */ (function () {
    function SHA256(text, digest) {
        if (digest === void 0) { digest = 'hex'; }
        this.plainText = text;
        this.digest = digest;
    }
    SHA256.prototype.convert = function () {
        var hash = crypto_1["default"].createHash('sha256').update(this.plainText).digest(this.verify());
        return hash;
    };
    SHA256.prototype.verify = function () {
        if (this.digest === 'hex' || this.digest === 'base64') {
            return this.digest;
        }
        else {
            return 'hex';
        }
    };
    return SHA256;
}());
;
exports["default"] = SHA256;
//# sourceMappingURL=cypher.js.map