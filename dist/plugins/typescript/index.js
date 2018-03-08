"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_1 = require("typescript");
class TypescriptLanguageServiceHost {
    constructor() {
        this._scripts = {};
    }
    getCompilationSettings() {
        return typescript_1.getDefaultCompilerOptions();
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
        return typescript_1.getDefaultLibFileName(this.getCompilationSettings());
    }
    addFile(fileName, contents) {
        this._scripts[fileName] = { version: "0", snapshot: typescript_1.ScriptSnapshot.fromString(contents) };
    }
}
var typescriptLanguageServiceHost;
var languageService = typescript_1.createLanguageService((typescriptLanguageServiceHost = new TypescriptLanguageServiceHost()), typescript_1.createDocumentRegistry());
class Typescript {
    constructor(_fileSystem) {
        this._fileSystem = _fileSystem;
    }
    getServices() {
        return ['completion', 'linter'];
    }
    getFileTypes() {
        return ['.ts', '.tsx', '.js', '.jsx'];
    }
    openFile(filePath) {
        return this._fileSystem.readFile(filePath).then((val) => {
            typescriptLanguageServiceHost.addFile(filePath, val);
        });
    }
    getCompletionsAt(filePath, position) {
        return new Promise((resolve, reject) => {
            var completions = languageService.getCompletionsAtPosition(filePath, position.offset, { includeExternalModuleExports: true, includeInsertTextCompletions: true });
            resolve(completions.entries);
        });
    }
    getDefinitionAt(filePath, position) {
        return new Promise((resolve, reject) => {
            var definitions = languageService.getDefinitionAtPosition(filePath, position.offset);
            resolve(definitions);
        });
    }
}
exports.default = Typescript;
//# sourceMappingURL=index.js.map