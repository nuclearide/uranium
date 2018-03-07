import {Uranium} from '../src/index';
import Plugins from '../src/plugin/plugins';
import FSProvider from '../src/filesystem/fs';

var u;

describe('Uranium', () => {
  test('constructor', () => {
    u = new Uranium({
      fileSystem: new FSProvider()
    });
    expect(u.Plugins).toBeInstanceOf(Plugins);
  });
});