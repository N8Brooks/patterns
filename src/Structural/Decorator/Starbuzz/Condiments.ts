import Beverage from "./Beverage";

export abstract class CondimentDecorator extends Beverage {
  protected _beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this._beverage = beverage;
  }
}

export class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  get description(): string {
    return this._beverage.description;
  }

  get cost(): number {
    return this._beverage.cost + 0.2;
  }
}

export class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  get description(): string {
    return this._beverage.description;
  }

  get cost(): number {
    return this._beverage.cost + 0.1;
  }
}

export class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  get description(): string {
    return this._beverage.description;
  }

  get cost(): number {
    return this._beverage.cost + 0.15;
  }
}
