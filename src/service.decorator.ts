import { GenericClassDecorator } from "./types/index";
import { Type } from "./type.interface";
import { Container } from "./container";
import { Injector } from "./injector";

export const Service = (): GenericClassDecorator<Type<object>> => {
  return (target: Type<object>) => {
    // Injector.resolve(target);
    // do something with `target`
  };
};
