import { PizzaIngredientFactory } from "./IngredientFactory";
import { Cheese, Clams, Dough, Pepperoni, Sauce, Veggies } from "./Ingredients";

export abstract class Pizza {
  protected abstract _name: string;
  protected _ingredientFactory: PizzaIngredientFactory;

  protected _dough = new Dough();
  protected _sauce = new Sauce();
  protected _cheese = new Cheese();
  protected _pepperoni = new Pepperoni();
  protected _clam = new Clams();
  protected _veggies: Array<Veggies> = [];

  constructor(ingredientFactory: PizzaIngredientFactory) {
    this._ingredientFactory = ingredientFactory;
  }

  abstract prepare(): void;

  bake(): void {
    console.log("baking...");
  }

  cut(): void {
    console.log("cutting...");
  }

  box(): void {
    console.log("boxing...");
  }

  set name(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  toString(): string {
    return `${this._name} with ${this._cheese.toString()} and ${this._sauce.toString()} on ${this._dough.toString()}`;
  }
}

export class CheesePizza extends Pizza {
  _name = "Cheese pizza";

  prepare(): void {
    console.log(`Preparing: ${this._name}`);
    this._dough = this._ingredientFactory.createDough();
    this._sauce = this._ingredientFactory.createSauce();
    this._cheese = this._ingredientFactory.createCheese();
  }
}

export class PepperoniPizza extends Pizza {
  _name = "Pepperoni pizza";

  prepare(): void {
    console.log(`Preparing: ${this._name}`);
    this._dough = this._ingredientFactory.createDough();
    this._sauce = this._ingredientFactory.createSauce();
    this._cheese = this._ingredientFactory.createCheese();
    this._veggies = this._ingredientFactory.createVeggies();
    this._pepperoni = this._ingredientFactory.createPepperoni();
  }
}

export class VeggiePizza extends Pizza {
  _name = "Veggie pizza";

  prepare(): void {
    console.log(`Preparing ${this._name}`);
    this._dough = this._ingredientFactory.createDough();
    this._sauce = this._ingredientFactory.createSauce();
    this._cheese = this._ingredientFactory.createCheese();
    this._veggies = this._ingredientFactory.createVeggies();
  }
}

export class ClamPizza extends Pizza {
  _name = "Clam pizza";

  prepare(): void {
    console.log(`Preparing ${this._name}`);
    this._dough = this._ingredientFactory.createDough();
    this._sauce = this._ingredientFactory.createSauce();
    this._cheese = this._ingredientFactory.createCheese();
    this._clam = this._ingredientFactory.createClam();
  }
}
