import Typescript from '../../../src/plugins/typescript/index';
import FSProvider from '../../../src/filesystem/fs';

var typescript: Typescript;

describe('Typescript', () => {
    it('constructor()', () => {
        typescript = new Typescript(new FSProvider());
    });
    it('getServices()', () => {
        expect(typescript.getServices()).toEqual(['completion', 'linter']);
    });
    it('getFileTypes()', () => {
        expect(typescript.getFileTypes()).toEqual(['.ts','.tsx','.js','.jsx']);
    });
    it('openFile()', () => {
        return typescript.openFile(__filename);
    });
    it('getCompletions()', () => {
        return typescript.getCompletions(__filename, {line: 0, char: 0, offset: 0}).then((completions) => {
            expect(completions[0].name).toBeTruthy();
        });
    });
});