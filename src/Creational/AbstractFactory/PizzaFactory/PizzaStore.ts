import { ChicagoPizzaIngredientFactory, NYPizzaIngredientFactory } from "./IngredientFactory";
import { CheesePizza, ClamPizza, PepperoniPizza, Pizza, VeggiePizza } from "./Pizza";

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
    let pizza: Pizza;
    const ingredientFactory = new NYPizzaIngredientFactory();

    switch (pizzaType) {
      case "cheese":
        pizza = new CheesePizza(ingredientFactory);
        pizza.name = "New York Style Cheese Pizza";
        break;
      case "veggie":
        pizza = new VeggiePizza(ingredientFactory);
        pizza.name = "New York Style Veggie Pizza";
        break;
      case "clam":
        pizza = new ClamPizza(ingredientFactory);
        pizza.name = "New York Style Clam Pizza";
        break;
      case "pepperoni":
        pizza = new PepperoniPizza(ingredientFactory);
        pizza.name = "New York Style Pepperoni Pizza";
        break;
      default:
        throw new Error(`Unknown pizzaType: ${pizzaType}`);
    }

    return pizza;
  }
}

export class ChicagoPizzaStore extends PizzaStore {
  createPizza(pizzaType: string): Pizza {
    let pizza: Pizza;
    const ingredientFactory = new ChicagoPizzaIngredientFactory();

    switch (pizzaType) {
      case "cheese":
        pizza = new CheesePizza(ingredientFactory);
        pizza.name = "Chicago Style Cheese Pizza";
        break;
      case "veggie":
        pizza = new VeggiePizza(ingredientFactory);
        pizza.name = "Chicago Style Veggie Pizza";
        break;
      case "clam":
        pizza = new ClamPizza(ingredientFactory);
        pizza.name = "Chicago Style Clam Pizza";
        break;
      case "pepperoni":
        pizza = new PepperoniPizza(ingredientFactory);
        pizza.name = "Chicago Style Pepperoni Pizza";
        break;
      default:
        throw new Error(`Unknown pizzaType: ${pizzaType}`);
    }

    return pizza;
  }
}
