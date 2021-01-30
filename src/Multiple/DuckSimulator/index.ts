import { AbstractDuckFactory, CountingDuckFactory } from "./DuckFactories";
import { DuckCall, Goose, GooseAdapter, MallardDuck, Quackable, RedheadDuck, RubberDuck } from "./Ducks";
import Flock from "./Flock";
import { Quackologist } from "./Observer";
import QuackCounter from "./QuackCounter";

duckSimulator();
simulateAbstractFactory(new CountingDuckFactory());
simulateObserver(new CountingDuckFactory());

function simulate(duck: Quackable) {
  duck.quack();
}

function duckSimulator(): void {
  const mallardDuck = new QuackCounter(new MallardDuck());
  const redheadDuck = new QuackCounter(new RedheadDuck());
  const duckCall = new QuackCounter(new DuckCall());
  const rubberDuck = new QuackCounter(new RubberDuck());

  const gooseAdapter = new GooseAdapter(new Goose());

  console.log("Duck simulator:");

  simulate(mallardDuck);
  simulate(redheadDuck);
  simulate(duckCall);
  simulate(rubberDuck);
  simulate(gooseAdapter);

  console.log(QuackCounter.count);
}

function simulateAbstractFactory(abstractDuckFactory: AbstractDuckFactory): void {
  const quackers = new Flock([
    abstractDuckFactory.createMallardDuck(),
    abstractDuckFactory.createRedheadDuck(),
    abstractDuckFactory.createDuckCall(),
    abstractDuckFactory.createRubberDuck(),
    abstractDuckFactory.createGooseDuck(new Goose()),
  ]);

  quackers.push(
    new Flock([
      abstractDuckFactory.createMallardDuck(),
      abstractDuckFactory.createRedheadDuck(),
      abstractDuckFactory.createDuckCall(),
      abstractDuckFactory.createRubberDuck(),
      abstractDuckFactory.createGooseDuck(new Goose()),
    ])
  );

  console.log("Duck abstract factory simulator");

  quackers.quack();

  console.log(QuackCounter.count);
}

function simulateObserver(abstractDuckFactory: AbstractDuckFactory): void {
  const quackers = new Flock([
    abstractDuckFactory.createMallardDuck(),
    abstractDuckFactory.createRedheadDuck(),
    abstractDuckFactory.createDuckCall(),
    abstractDuckFactory.createRubberDuck(),
    abstractDuckFactory.createGooseDuck(new Goose()),
  ]);

  quackers.push(
    new Flock([
      abstractDuckFactory.createMallardDuck(),
      abstractDuckFactory.createRedheadDuck(),
      abstractDuckFactory.createDuckCall(),
      abstractDuckFactory.createRubberDuck(),
      abstractDuckFactory.createGooseDuck(new Goose()),
    ])
  );

  console.log("Duck Simulator with observer");

  const quackologist = new Quackologist();
  quackers.registerObserver(quackologist);

  simulate(quackers);

  console.log(`The ducks quacked ${QuackCounter.count} times`);
}
