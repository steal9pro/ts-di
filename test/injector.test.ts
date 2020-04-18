import { Service } from "../src/service.decorator";
import { Container } from "../src/container";
import { TYPES } from "./types";
import { expect } from "chai";
import { Injector } from "../src/injector";

// Fixtures
@Service()
export class Foo {
  constructor() {
    console.log("initialize Foo");
  }
}

@Service()
export class Bar {
  constructor() {
    console.log("initialize Bar");
  }
}

@Service()
export class Foobar {
  constructor(public foo: Foo, public bar: Bar) {
    console.log("initialize FooBar");
  }
}

@Service()
export class Baz {
  constructor(public foobar: Foobar) {}
}

describe("Injector", () => {
  it("should create simple instances", () => {
    let foo = Container.get(Foo);
    expect(foo).to.be.an.instanceof(Foo);
  });

  it("should create dependency injected instances", () => {
    let foobar = Container.get(Foobar);
    expect(foobar.foo).to.be.an.instanceof(Foo);
    expect(foobar.bar).to.be.an.instanceof(Bar);
  });

  it("should create deep dependency injected instances", () => {
    let baz = Container.get(Baz);
    expect(baz.foobar).to.be.an.instanceof(Foobar);
    expect(baz.foobar.foo).to.be.an.instanceof(Foo);
    expect(baz.foobar.bar).to.be.an.instanceof(Bar);
  });
});
