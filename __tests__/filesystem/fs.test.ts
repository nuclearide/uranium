import FSProvider from '../../src/filesystem/fs';
import { join } from 'path';

var fsprovider: FSProvider;

describe('FSProvider', () => {
    beforeEach(() => {
        fsprovider = new FSProvider();
    });
    describe('readFile()', () => {
        it('should read file', () => {
            return fsprovider.readFile(join(__dirname, 'test.txt')).then((contents) => {
                expect(contents).toEqual('test');
            });
        });
        it('shouldn\'t read file that doesn\'t exist', () => {
            return fsprovider.readFile(join(__dirname, 'test')).catch((err) => {
                expect(err).toBeTruthy();
            });
        });
    });
    describe('exists()', () => {
        it('should return true', () => {
            return fsprovider.exists(join(__dirname, 'test.txt')).then((exists) => {
                expect(exists).toBe(true);
            });
        });
        it('shouldn\'t return true', () => {
            return fsprovider.exists(join(__dirname, 'test')).then((exists) => {
                expect(exists).toBe(false);
            });
        });
    });
    describe('writeFile()', () => {
        it('should write file', () => {
            return fsprovider.writeFile(join(__dirname, 'test.txt'), 'test').then((success) => {
                expect(success).toBe(true);
            });
        });
        it('shouldn\'t write file', () => {
            return fsprovider.writeFile(__dirname, '').catch((error) => {
                expect(error).toBeTruthy();
            });
        });
    });
});