import 'reflect-metadata';
import { Type } from "./type.interface";

export const Injector = new class {
    // Injector implementation

    // resolving instances
    resolve<T>(target: Type<any>): T {
        // tokens are required dependencies, while injections are resolved tokens from the Injector
        let tokens = Reflect.getMetadata('design:paramtypes', target) || [];
        let injections = tokens.map((token: any) => Injector.resolve(token));
        
        return new target(...injections);
    }
};
  