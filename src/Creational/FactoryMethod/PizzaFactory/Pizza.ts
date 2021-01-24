export abstract class Pizza {
  protected abstract _name: string;
  protected abstract _cheese: string;
  protected abstract _dough: string;
  protected abstract _sauce: string;
  protected toppings: Array<string> = [];

  prepare(): void {
    console.log(`preparing a ${this._name} pizza...`);
    console.log(`features ${this._cheese}, ${this._dough}, ${this._sauce}`);
  }

  bake(): void {
    console.log("baking...");
  }

  cut(): void {
    console.log("cutting...");
  }

  box(): void {
    console.log("boxing...");
  }

  get name(): string {
    return this._name;
  }
}

export class NYStyleCheesePizza extends Pizza {
  _name = "New york style cheese";
  _cheese = "Mozzarella cheese";
  _dough = "Thin crust dough";
  _sauce = "Marinara sauce";

  constructor() {
    super();
    this.toppings.push("Grated reggiano cheese");
  }
}

export class NYStyleVeggiePizza extends Pizza {
  _name = "New york style veggie";
  _cheese = "Mozzarella cheese";
  _dough = "Thin crust dough";
  _sauce = "Marinara sauce";

  constructor() {
    super();
    this.toppings.push("Grated reggiano cheese");
    this.toppings.push("Roasted green peppers");
  }
}

export class NYStylePepperoniPizza extends Pizza {
  _name = "New york style pepperoni";
  _cheese = "Mozzarella cheese";
  _dough = "Thin crust dough";
  _sauce = "Marinara sauce";

  constructor() {
    super();
    this.toppings.push("Grated reggiano cheese");
    this.toppings.push("The finest pepperoni");
  }
}

export class NYStyleClamPizza extends Pizza {
  _name = "New york style clam";
  _cheese = "Mozzarella cheese";
  _dough = "Thin crust dough";
  _sauce = "Marinara sauce";

  constructor() {
    super();
    this.toppings.push("Grated reggiano cheese");
    this.toppings.push("Freshwater clam");
  }
}

export class ChicagoStyleCheesePizza extends Pizza {
  _name = "Chicago style deep dish cheese";
  _cheese = "Mozzarella cheese";
  _dough = "Thick crust dough";
  _sauce = "Marinara sauce";

  constructor() {
    super();
    this.toppings.push("Grated reggiano cheese");
  }
}

export class ChicagoStyleVeggiePizza extends Pizza {
  _name = "Chicago style deep dish veggie";
  _cheese = "Mozzarella cheese";
  _dough = "Thick crust dough";
  _sauce = "Marinara sauce";

  constructor() {
    super();
    this.toppings.push("Grated reggiano cheese");
    this.toppings.push("Roasted green peppers");
  }
}

export class ChicagoStylePepperoniPizza extends Pizza {
  _name = "Chicago style deep dish pepperoni";
  _cheese = "Mozzarella cheese";
  _dough = "Thick crust dough";
  _sauce = "Marinara sauce";

  constructor() {
    super();
    this.toppings.push("Grated reggiano cheese");
    this.toppings.push("The finest pepperoni");
  }
}

export class ChicagoStyleClamPizza extends Pizza {
  _name = "Chicago style deep dish clam";
  _cheese = "Mozzarella cheese";
  _dough = "Thick crust dough";
  _sauce = "Marinara sauce";

  constructor() {
    super();
    this.toppings.push("Grated reggiano cheese");
    this.toppings.push("Freshwater clam");
  }
}
