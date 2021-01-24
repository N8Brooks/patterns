import Duck from ".";
import FlyNoWay from "../FlyBehavior/FlyWithWings";
import Quack from "../QuackBehavior/Quack";

export default class ModelDuck extends Duck {
  _quackBehavior = new Quack();
  _flyBehavior = new FlyNoWay();

  display(): void {
    console.log("I'm a model duck");
  }
}
