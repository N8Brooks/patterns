export abstract class QuackBehavior {
  abstract quack(): void;
}

export class Quack extends QuackBehavior {
  quack() {
    console.log("Quacking");
  }
}

export class Squeak extends QuackBehavior {
  quack() {
    console.log("Squeak");
  }
}

export class MuteQuack extends QuackBehavior {
  quack() {
    console.log("...");
  }
}
