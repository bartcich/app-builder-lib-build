"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashFile = hashFile;

function _crypto() {
  const data = require("crypto");

  _crypto = function () {
    return data;
  };

  return data;
}

var _fs = require("fs");

function hashFile(file, algorithm = "sha512", encoding = "base64", options) {
  return new Promise((resolve, reject) => {
    const hash = (0, _crypto().createHash)(algorithm);
    hash.on("error", reject).setEncoding(encoding);
    (0, _fs.createReadStream)(file, Object.assign(Object.assign({}, options), {
      highWaterMark: 1024 * 1024
      /* better to use more memory but hash faster */

    })).on("error", reject).on("end", () => {
      hash.end();
      resolve(hash.read());
    }).pipe(hash, {
      end: false
    });
  });
} 
// __ts-babel@6.0.4
//# sourceMappingURL=hash.js.map