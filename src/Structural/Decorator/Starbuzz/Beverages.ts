import Beverage from "./Beverage";

export class Espresso extends Beverage {
  _description = "Espresso";

  get cost(): number {
    return 1.99;
  }
}

export class HouseBlend extends Beverage {
  _description = "House Blend Coffee";

  get cost(): number {
    return 0.89;
  }
}

export class Decaf extends Beverage {
  _description = "Decaf Coffee";

  get cost(): number {
    return 1.05;
  }
}

export class DarkRoast extends Beverage {
  _description = "Dark Roast Coffee";

  get cost(): number {
    return 0.99;
  }
}
