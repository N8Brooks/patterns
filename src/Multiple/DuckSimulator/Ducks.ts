import { Observable, Observer, QuackObservable } from "./Observer";

export interface Quackable extends QuackObservable {
  quack(): void;
  toString(): string;
}

export class MallardDuck implements Quackable {
  private _observable = new Observable(this);

  registerObserver(observer: Observer): void {
    this._observable.registerObserver(observer);
  }

  notifyObservers(): void {
    this._observable.notifyObservers();
  }

  quack(): void {
    console.log("Quack.");
    this.notifyObservers();
  }

  toString(): string {
    return "Mallard duck";
  }
}

export class RedheadDuck implements Quackable {
  private _observable = new Observable(this);

  registerObserver(observer: Observer): void {
    this._observable.registerObserver(observer);
  }

  notifyObservers(): void {
    this._observable.notifyObservers();
  }

  quack(): void {
    console.log("...");
    this.notifyObservers();
  }

  toString(): string {
    return "Redhead duck";
  }
}

export class DuckCall implements Quackable {
  private _observable = new Observable(this);

  registerObserver(observer: Observer): void {
    this._observable.registerObserver(observer);
  }

  notifyObservers(): void {
    this._observable.notifyObservers();
  }

  quack(): void {
    console.log("Kwak");
    this.notifyObservers();
  }

  toString(): string {
    return "Duck call";
  }
}

export class RubberDuck implements Quackable {
  private _observable = new Observable(this);

  registerObserver(observer: Observer): void {
    this._observable.registerObserver(observer);
  }

  notifyObservers(): void {
    this._observable.notifyObservers();
  }

  quack(): void {
    console.log("Squeak");
    this.notifyObservers();
  }

  toString(): string {
    return "Rubber duck";
  }
}

export class Goose {
  honk(): void {
    console.log("Honk!");
  }
}

export class GooseAdapter implements Quackable {
  private _observable = new Observable(this);
  private _goose: Goose;

  constructor(goose: Goose) {
    this._goose = goose;
  }

  registerObserver(observer: Observer): void {
    this._observable.registerObserver(observer);
  }

  notifyObservers(): void {
    this._observable.notifyObservers();
  }

  quack(): void {
    this._goose.honk();
    this.notifyObservers();
  }

  toString(): string {
    return "Goose";
  }
}
