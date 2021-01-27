export abstract class CaffeineBeverage {
  abstract brew(): void;
  abstract addCondiments(): void;

  prepareRecipe(): void {
    // final - do not subclass
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.customerWantsCondiments() && this.addCondiments();
  }

  boilWater(): void {
    console.log("Boiling water");
  }

  pourInCup(): void {
    console.log("Pouring into cup");
  }

  customerWantsCondiments(): boolean {
    return true;
  }
}

export class Tea extends CaffeineBeverage {
  _customerWantsLemon: boolean;

  constructor(customerWantsLemon = false) {
    // could also ask user if they want lemon
    super();
    this._customerWantsLemon = customerWantsLemon;
  }

  brew(): void {
    console.log("Steeping tea bag");
  }

  addCondiments(): void {
    console.log("Adding lemon");
  }

  customerWantsCondiments(): boolean {
    return false;
  }
}

export class Coffee extends CaffeineBeverage {
  brew(): void {
    console.log("Dripping coffee through the filter");
  }

  addCondiments(): void {
    console.log("Adding sugar and milk");
  }
}
