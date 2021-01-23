import { FlyBehavior, FlyNoWay, FlyWithWings } from "./FlyBehavior";
import { QuackBehavior, Quack, Squeak, MuteQuack } from "./QuackBehavior";

abstract class Duck {
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

export class MallardDuck extends Duck {
  _quackBehavior = new Quack();
  _flyBehavior = new FlyWithWings();

  display() {
    console.log("I'm a real Mallard duck");
  }
}

export class RedheadDuck extends Duck {
  _quackBehavior = new MuteQuack();
  _flyBehavior = new FlyWithWings();

  display() {
    console.log("idk");
  }
}

export class RubberDuck extends Duck {
  _quackBehavior = new Squeak();
  _flyBehavior = new FlyNoWay();

  display() {
    console.log("idk");
  }
}
