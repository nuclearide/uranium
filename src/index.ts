import Plugins from './plugin/plugins';

export class Uranium {
    private _plugins: Plugins;

    constructor() {
        this._plugins = new Plugins();
    }

    get Plugins(): Plugins {
        return this._plugins;
    }
}