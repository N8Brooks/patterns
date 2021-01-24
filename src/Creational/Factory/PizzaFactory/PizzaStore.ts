import {
  ChicagoStyleCheesePizza,
  ChicagoStyleClamPizza,
  ChicagoStylePepperoniPizza,
  ChicagoStyleVeggiePizza,
  NYStyleCheesePizza,
  NYStyleClamPizza,
  NYStylePepperoniPizza,
  NYStyleVeggiePizza,
  Pizza,
} from "./Pizza";

abstract class PizzaStore {
  protected abstract createPizza(pizzaType: string): Pizza;

  orderPizza(pizzaType: string): Pizza {
    const pizza = this.createPizza(pizzaType);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

export class NYPizzaStore extends PizzaStore {
  createPizza(pizzaType: string): Pizza {
    switch (pizzaType) {
      case "cheese":
        return new NYStyleCheesePizza();
      case "pepperoni":
        return new NYStylePepperoniPizza();
      case "clam":
        return new NYStyleClamPizza();
      case "veggie":
        return new NYStyleVeggiePizza();
      default:
        throw new Error("Unknown pizzaType");
    }
  }
}

export class ChicagoPizzaStore extends PizzaStore {
  createPizza(pizzaType: string): Pizza {
    switch (pizzaType) {
      case "cheese":
        return new ChicagoStyleCheesePizza();
      case "pepperoni":
        return new ChicagoStylePepperoniPizza();
      case "clam":
        return new ChicagoStyleClamPizza();
      case "veggie":
        return new ChicagoStyleVeggiePizza();
      default:
        throw new Error("Unknown pizzaType");
    }
  }
}
