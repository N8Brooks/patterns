import Beverage from "./Beverage";
import { DarkRoast, Espresso, HouseBlend } from "./Beverages";
import { Mocha, Soy, Whip } from "./Condiments";

function starbuzzCoffee() {
  const beverage = new Espresso();
  console.log(beverage.menuItem());

  let beverage2: Beverage = new DarkRoast();
  beverage2 = new Mocha(new Mocha(new Whip(beverage2)));
  console.log(beverage2.menuItem());

  let beverage3: Beverage = new HouseBlend();
  beverage3 = new Soy(new Mocha(new Whip(beverage3)));
  console.log(beverage3.menuItem());
}

starbuzzCoffee();
