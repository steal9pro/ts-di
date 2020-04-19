import { Service } from "../src/service.decorator";
import { Container } from "../src/container";
import { expect } from "chai";
import { Foo } from "./services/foo.service";
import { Bar } from "./services/bar.service";

// Fixtures
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
    let bar = Container.get(Bar);
    expect(bar).to.be.an.instanceof(Bar);
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
