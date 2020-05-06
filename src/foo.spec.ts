
import { Foo } from './foo';
import { Bar } from './bar';

describe('Contents Service Tests', () => {
  const foo = new Foo();


  it('list Method', () => {
    // prototype を使ってメソッドを上書き
    Bar.prototype.getUser = (): string => {
      return 'piro piro';
    };
    expect(foo.getUserName()).toEqual('piro piro');
  });
});
