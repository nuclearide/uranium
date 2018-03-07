import Plugins from '../../src/plugin/plugins';
import FSProvider from '../../src/filesystem/fs';

var plugins: Plugins;

describe('Plugin', () => {
    it('constructor', () => {
        plugins = new Plugins({fileSystem: new FSProvider});
    })
    it('load', () => {
        plugins.load('typescript');
        expect(plugins.getPlugins().length).toEqual(1);
    })
    it('getPlugins', () => {
        expect(plugins.getPlugins() instanceof Array).toBe(true);
    });
    it('getCompleters', () => {
        expect(~plugins.getCompleters()[0].getServices().indexOf('completion')).toBeTruthy();
    })
    it('getLinters', () => {
        expect(~plugins.getLinters()[0].getServices().indexOf('linter')).toBeTruthy();
    })
    it('openFile', () => {
        return plugins.getPlugins()[0].openFile(__filename)
    })
});