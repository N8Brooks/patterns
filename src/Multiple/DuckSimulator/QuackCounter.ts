import { Quackable } from "./Ducks";
import { Observable, Observer } from "./Observer";

export default class QuackCounter implements Quackable {
  private _observable = new Observable(this);
  private _duck: Quackable;
  private static _count = 0;

  constructor(duck: Quackable) {
    this._duck = duck;
  }

  registerObserver(observer: Observer): void {
    this._observable.registerObserver(observer);
  }

  notifyObservers(): void {
    this._observable.notifyObservers();
  }

  quack(): void {
    this._duck.quack();
    QuackCounter._count++;
  }

  toString(): string {
    return this._duck.toString();
  }

  static get count(): number {
    return QuackCounter._count;
  }
}
