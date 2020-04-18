import { GenericClassDecorator } from "./types/index";
import { Type } from "./type.interface";
import { Container } from "./container";
import { Injector } from "./injector";

export const Service = (): GenericClassDecorator<Type<object>> => {
  return (target: Type<object>) => {
    Injector.resolve(target);
    // Container.downloadService(target);
    // do something with `target`, e.g. some kind of validation or passing it to the Injector and store them
  };
};
