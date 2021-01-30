import { DuckCall, Goose, GooseAdapter, MallardDuck, Quackable, RedheadDuck, RubberDuck } from "./Ducks";
import QuackCounter from "./QuackCounter";

export abstract class AbstractDuckFactory {
  abstract createMallardDuck(): Quackable;
  abstract createRedheadDuck(): Quackable;
  abstract createDuckCall(): Quackable;
  abstract createRubberDuck(): Quackable;
  abstract createGooseDuck(goose: Goose): Quackable;
}

export class DuckFactory extends AbstractDuckFactory {
  createMallardDuck(): Quackable {
    return new MallardDuck();
  }

  createRedheadDuck(): Quackable {
    return new RedheadDuck();
  }

  createDuckCall(): Quackable {
    return new DuckCall();
  }

  createRubberDuck(): Quackable {
    return new RubberDuck();
  }

  createGooseDuck(goose: Goose): Quackable {
    return new GooseAdapter(goose);
  }
}

export class CountingDuckFactory extends AbstractDuckFactory {
  createMallardDuck(): Quackable {
    return new QuackCounter(new MallardDuck());
  }

  createRedheadDuck(): Quackable {
    return new QuackCounter(new RedheadDuck());
  }

  createDuckCall(): Quackable {
    return new QuackCounter(new DuckCall());
  }

  createRubberDuck(): Quackable {
    return new QuackCounter(new RubberDuck());
  }

  createGooseDuck(goose: Goose): Quackable {
    return new QuackCounter(new GooseAdapter(goose));
  }
}
