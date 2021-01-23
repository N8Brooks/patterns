import Duck from ".";
import FlyWithWings from "../FlyBehavior/FlyWithWings";
import Quack from "../QuackBehavior/Quack";

export default class MallardDuck extends Duck {
  _quackBehavior = new Quack();
  _flyBehavior = new FlyWithWings();

  display() {
    console.log("I'm a real mallard duck");
  }
}
