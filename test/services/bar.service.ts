import { Service } from "../../src/service.decorator";
import { Foo } from "./foo.service";

@Service()
export class Bar {
  constructor(private foo: Foo) {
    console.log("initialize Bar");
  }
}