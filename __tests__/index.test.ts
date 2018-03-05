import {Uranium} from '../src/index';
import Plugins from '../src/plugin/plugins';

var u;

describe('Uranium', () => {
  test('constructor', () => {
    u = new Uranium();
    expect(u.Plugins).toBeInstanceOf(Plugins);
  });
});