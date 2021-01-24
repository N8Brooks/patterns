import FlyBehavior from "../FlyBehavior";
import QuackBehavior from "../QuackBehavior";

export default abstract class Duck {
  abstract display(): void;
  abstract _quackBehavior: QuackBehavior;
  abstract _flyBehavior: FlyBehavior;

  set quackBehavior(quackBehavior: QuackBehavior) {
    this._quackBehavior = quackBehavior;
  }

  performQuack(): void {
    this._quackBehavior.quack();
  }

  set flyBehavior(flyBehavior: FlyBehavior) {
    this._flyBehavior = flyBehavior;
  }

  performFly(): void {
    this._flyBehavior.fly();
  }

  performSwim(): void {
    console.log("All ducks float, even decoys.");
  }
}
