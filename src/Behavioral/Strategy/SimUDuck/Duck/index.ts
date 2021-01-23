import FlyBehavior from "../FlyBehavior";
import QuackBehavior from "../QuackBehavior";

export default abstract class Duck {
  abstract display(): void;
  abstract _quackBehavior: QuackBehavior;
  abstract _flyBehavior: FlyBehavior;

  set quackBehavior(quackBehavior: QuackBehavior) {
    this._quackBehavior = quackBehavior;
  }

  performQuack() {
    this._quackBehavior.quack();
  }

  set flyBehavior(flyBehavior: FlyBehavior) {
    this._flyBehavior = flyBehavior;
  }

  performFly() {
    this._flyBehavior.fly();
  }

  performSwim() {
    console.log("All ducks float, even decoys.");
  }
}
