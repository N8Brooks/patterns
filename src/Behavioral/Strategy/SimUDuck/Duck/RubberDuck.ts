import Duck from ".";
import FlyNoWay from "../FlyBehavior/FlyWithWings";
import Squeak from "../QuackBehavior/Squeak";

export default class RubberDuck extends Duck {
  _quackBehavior = new Squeak();
  _flyBehavior = new FlyNoWay();

  display(): void {
    console.log("I'm a rubber duck");
  }
}
