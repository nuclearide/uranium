import Typescript from '../../../src/plugins/typescript/index';

var typescript: Typescript;

describe('Typescript', () => {
    it('constructor', () => {
        typescript = new Typescript();
    });
    it('getServices', () => {
        expect(typescript.getServices()).toEqual(['completion', 'linter']);
    });
});