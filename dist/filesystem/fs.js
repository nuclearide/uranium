"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const fs_2 = require("fs");
class FSProvider {
    readFile(filePath) {
        return new Promise((resolve, reject) => {
            fs_1.readFile(filePath, (err, ret) => {
                if (err)
                    return reject(err);
                resolve(ret.toString());
            });
        });
    }
    exists(filePath) {
        return new Promise((resolve, reject) => {
            fs_1.exists(filePath, (exists) => {
                resolve(exists);
            });
        });
    }
    writeFile(filePath, contents) {
        return new Promise((resolve, reject) => {
            fs_2.writeFile(filePath, contents, (err) => {
                if (err)
                    return reject(err);
                resolve(true);
            });
        });
    }
}
exports.default = FSProvider;
//# sourceMappingURL=fs.js.map