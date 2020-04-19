import { expect } from "chai";
import { Foo } from "./services/foo.service";
import { Bar } from "./services/bar.service";
import { Service } from "../src/service.decorator";

@Service()
export class FooBar {
  constructor(private foo: Foo) {
    console.log("init foo bar");
  }
}

describe("Injector", () => {
  it("should throw error", () => {
    expect(() => {}).to.throw();
  });
});
