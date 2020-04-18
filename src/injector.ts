import "reflect-metadata";
import { Type } from "./type.interface";
import { Container } from "./container";

export const Injector = new (class {
  // Injector implementation

  // resolving instances
  resolve<T>(target: Type<any>) {
    console.log('start resolve service ', target.name);
    
    // tokens are required dependencies, while injections are resolved tokens from the Injector
    let tokens = Reflect.getMetadata("design:paramtypes", target) || [];
    console.log("tokens = ", tokens, "from target ", target.name);

    let injections = tokens.map((token: any) => {
      console.log("resolve token ", token.name);

      return Injector.resolve(token);
    });

    return Container.getOrCreate(target, injections);
  }
})();
