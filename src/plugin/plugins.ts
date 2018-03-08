import {Plugin} from './plugin';
import { join } from 'path';
import { FileSystemProvider } from '../filesystem/filesystem';

export default class Plugins {
    private _plugins: Plugin[];
    private _fileSystem;

    constructor(
        {fileSystem}: {fileSystem: FileSystemProvider}
    ) {
        this._fileSystem = fileSystem;
        this._plugins = [];
    }

    getPlugins() {
        return this._plugins;
    }

    getLintersForFileType(extension: string) {
        return this._plugins.filter(plugin => {
            return ~plugin.getServices().indexOf('linter') && ~plugin.getFileTypes().indexOf(extension);
        });
    }

    getCompletersForFileType(extension: string) {
        return this._plugins.filter(plugin => {
            return ~plugin.getServices().indexOf('completion') && ~plugin.getFileTypes().indexOf(extension);
        });
    }

    load(name: string) {
        this._plugins.push(new (require(join('../plugins/', name)).default)(this._fileSystem));
    }
}