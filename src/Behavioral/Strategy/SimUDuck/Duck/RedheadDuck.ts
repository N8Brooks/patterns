import Duck from ".";
import FlyWithWings from "../FlyBehavior/FlyWithWings";
import MuteQuack from "../QuackBehavior/MuteQuack";

export default class RedheadDuck extends Duck {
  _quackBehavior = new MuteQuack();
  _flyBehavior = new FlyWithWings();

  display(): void {
    console.log("I'm a redhead duck");
  }
}
