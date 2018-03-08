"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
class Plugins {
    constructor({ fileSystem }) {
        this._fileSystem = fileSystem;
        this._plugins = [];
    }
    getPlugins() {
        return this._plugins;
    }
    getLintersForFileType(extension) {
        return this._plugins.filter(plugin => {
            return ~plugin.getServices().indexOf('linter') && ~plugin.getFileTypes().indexOf(extension);
        });
    }
    getCompletersForFileType(extension) {
        return this._plugins.filter(plugin => {
            return ~plugin.getServices().indexOf('completion') && ~plugin.getFileTypes().indexOf(extension);
        });
    }
    load(name) {
        this._plugins.push(new (require(path_1.join('../plugins/', name)).default)(this._fileSystem));
    }
}
exports.default = Plugins;
//# sourceMappingURL=plugins.js.map