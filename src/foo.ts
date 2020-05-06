import { Bar } from './bar';

export class Foo {

  private bar = new Bar();

  constructor() { }

  getUserName(): string {
    console.log('Foo.getUserName()');
    return this.bar.getUser();
  }
}