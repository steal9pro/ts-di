import { Service } from "../../src/service.decorator";
import { Bar } from "./bar.service";

@Service()
export class Foo {
  constructor() {
    console.log("initialize Foo");
  }
}
