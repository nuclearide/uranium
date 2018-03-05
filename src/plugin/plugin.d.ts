export type PluginType = 'completion'|'linter';

export interface Plugin {
    getServices(): PluginType[];
    getCompletions?();
    getLinting?();
}