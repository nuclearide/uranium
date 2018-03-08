export declare class FileSystemProvider {
    constructor();
    readFile(filePath: string): Promise<string>;
    exists(filePath: string): Promise<boolean>;
    writeFile(filePath: string, contents: string): Promise<boolean>;
}