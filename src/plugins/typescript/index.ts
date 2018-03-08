import {Plugin, PluginType} from '../../plugin/plugin';
import FSProvider from '../../filesystem/fs';
import { Uranium } from '../../Uranium';
import {LanguageServiceHost, createDocumentRegistry, getDefaultCompilerOptions, createLanguageService, IScriptSnapshot, getDefaultLibFileName, ScriptSnapshot} from 'typescript';

class TypescriptLanguageServiceHost implements LanguageServiceHost {
    _scripts: {[fileName: string]: {version: string, snapshot:IScriptSnapshot}} = {};
    getCompilationSettings() {
        return getDefaultCompilerOptions();
    }
    getScriptFileNames() {
        return Object.keys(this._scripts);
    }
    getScriptVersion(fileName) {
        return this._scripts[fileName].version;
    }
    getScriptSnapshot(fileName) {
        return this._scripts[fileName] && this._scripts[fileName].snapshot;
    }
    getCurrentDirectory() {
        return '/';
    }
    getDefaultLibFileName() {
        return getDefaultLibFileName(this.getCompilationSettings());
    }
    addFile(fileName, contents) {
        this._scripts[fileName] = {version: "0", snapshot: ScriptSnapshot.fromString(contents)};
    }
}
var typescriptLanguageServiceHost: TypescriptLanguageServiceHost;
var languageService = createLanguageService((typescriptLanguageServiceHost = new TypescriptLanguageServiceHost()), createDocumentRegistry());

export default class Typescript implements Plugin {
    constructor(
        private _fileSystem: FSProvider
    ) {}
    getServices(): PluginType[] {
        return ['completion', 'linter'];
    }

    getFileTypes() {
        return ['.ts','.tsx','.js','.jsx'];
    }

    openFile(filePath: string) {
        return this._fileSystem.readFile(filePath).then((val) => {
            typescriptLanguageServiceHost.addFile(filePath, val);
        });
    }

    getCompletionsAt(filePath: string, position: Uranium.Position): Promise<any[]> {
        return new Promise((resolve, reject) => {
            var completions = languageService.getCompletionsAtPosition(filePath, position.offset, {includeExternalModuleExports: true, includeInsertTextCompletions: true});
            resolve(completions.entries);
        });
    }

    getDefinitionAt(filePath: string, position: Uranium.Position): Promise<any[]> {
        return new Promise((resolve, reject) => {
            var definitions = languageService.getDefinitionAtPosition(filePath, position.offset);
            resolve(definitions);
        });
    }
}