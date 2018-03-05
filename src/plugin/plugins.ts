import {Plugin} from './plugin';
import { join } from 'path';

export default class Plugins {
    private _plugins: Plugin[];

    constructor() {
        this._plugins = [];
    }

    getPlugins() {
        return this._plugins;
    }

    getLinters() {
        return this._plugins.filter(plugin => {
            return ~plugin.getServices().indexOf('linter');
        });
    }

    getCompleters() {
        return this._plugins.filter(plugin => {
            return ~plugin.getServices().indexOf('completion');
        });
    }

    load(name: string) {
        this._plugins.push(new (require(join('../plugins/', name)).default));
    }
}