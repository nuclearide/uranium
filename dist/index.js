"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins_1 = require("./plugin/plugins");
class Uranium {
    constructor() {
        this._plugins = new plugins_1.default();
    }
    get Plugins() {
        return this._plugins;
    }
}
exports.Uranium = Uranium;
//# sourceMappingURL=index.js.map