export interface FileSystemProvider {
    readFile(filePath: string): Promise<string>;
    exists(filePath: string): Promise<boolean>;
    writeFile(filePath: string, contents: string): Promise<boolean>;
}