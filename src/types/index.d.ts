export type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
export type GenericClassDecorator<T> = (target: T) => void;
