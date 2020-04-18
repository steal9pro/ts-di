import { Type } from "./type.interface";
import { Injector } from "./injector";

export const Container = new (class {
  public services: any = {};

  get(target: Type<object>) {
    return this.services[target.name];
  }

  getOrCreate(target: Type<object>, injections: []) {
    const serviceId = target.name;
    console.log(
      `get or create ${target.name} result = `,
      this.services[serviceId]
    );
    console.log(this.services);
    console.log(serviceId);

    if (this.services[serviceId]) {
      return this.services[serviceId];
    }

    const service = new target(...injections);
    this.services[serviceId] = service;

    return service;
  }
})();
