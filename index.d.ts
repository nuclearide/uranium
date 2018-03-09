import { FileSystemProvider } from "./src/filesystem/filesystem";
import {Plugin} from "./src/plugin/plugin";

declare class Plugins {
    private _plugins: Plugin[];
    private _fileSystem;

    constructor(
        {fileSystem}: {fileSystem: FileSystemProvider}
    );

    getPlugins(): Plugin[];

    getLintersForFileType(extension: string): Plugin[];

    getCompletersForFileType(extension: string): Plugin[];

    load(name: string): void;
}

export type FileSystemProvider = FileSystemProvider;
export type Plugin = Plugin;
declare class Uranium {
    constructor(options: any);
    Plugins: Plugins;
}