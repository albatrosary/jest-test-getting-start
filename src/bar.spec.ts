import { Bar } from './bar';

describe('Contents Service Tests', () => {
  const bar = new Bar();

  it('list Method', () => {
    expect(bar.getUser()).toBe('YAMADA');
  });
});
