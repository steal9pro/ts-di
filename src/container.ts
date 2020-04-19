import { Type } from "./type.interface";
import { Injector } from "./injector";

export const Container = new (class {
  private services: any = {};
  private injectionsMap: any = {};

  setInjectionMapItem(target: string, dependency: string) {
    this.injectionsMap[target] = dependency;
  }

  getInjectionDependency(target: string, dependency: string) {
    return this.injectionsMap[target] === dependency;
  }

  get(target: Type<object>) {
    return this.services[target.name] || Injector.resolve(target);
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
