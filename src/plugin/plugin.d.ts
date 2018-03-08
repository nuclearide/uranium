import { Uranium } from "../Uranium";

export type PluginType = 'completion'|'linter';

export interface Plugin {
    getServices(): PluginType[];
    getFileTypes(): string[];
    openFile(filePath: string);
    getCompletionsAt?(filePath: string, position: number | Uranium.Position): Promise<any[]>;
    getDefinitionAt?(filePath: string, position: number | Uranium.Position): Promise<any[]>;
    getLinting?();
}