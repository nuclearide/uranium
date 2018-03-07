import Plugins from './plugin/plugins';
import {FileSystemProvider} from './filesystem/filesystem';

interface UraniumOptions {
    fileSystem: FileSystemProvider;
}

export class Uranium {
    _plugins: Plugins;

    constructor(options: UraniumOptions) {
        this._plugins = new Plugins(options);
    }

    get Plugins(): Plugins {
        return this._plugins;
    }
}