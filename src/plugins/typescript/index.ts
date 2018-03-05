import {Plugin, PluginType} from '../../plugin/plugin';

export default class Typescript implements Plugin {
    getServices(): PluginType[] {
        return ['completion', 'linter'];
    }
}