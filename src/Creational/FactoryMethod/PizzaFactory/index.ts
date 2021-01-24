import { ChicagoPizzaStore, NYPizzaStore } from "./PizzaStore";

console.log(new NYPizzaStore().orderPizza("clam").toString());
console.log(new ChicagoPizzaStore().orderPizza("cheese").toString());
