class App {
  constructor() {
    this.modules = {};
  }

  registerModule(moduleName, module) {
    this.modules[moduleName] = module;
  }

  getModule(moduleName) {
    return this.modules[moduleName];
  }
}

const app = new App();
