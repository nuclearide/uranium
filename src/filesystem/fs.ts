import {FileSystemProvider} from './filesystem';
import {readFile, exists} from 'fs';
import { writeFile } from 'fs';

export default class FSProvider implements FileSystemProvider {
    readFile(filePath: string): Promise<string> {
        return new Promise((resolve, reject) => {
            readFile(filePath, (err, ret) => {
                if(err) return reject(err);

                resolve(ret.toString());
            });
        });
    }
    exists(filePath: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            exists(filePath, (exists) => {
                resolve(exists);
            });
        });
    }

    writeFile(filePath: string, contents: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            writeFile(filePath, contents, (err) => {
                if(err) return reject(err);
                resolve(true);
            });
        });
    }
}