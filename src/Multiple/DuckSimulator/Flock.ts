import { Quackable } from "./Ducks";
import { Observer } from "./Observer";

export default class Flock implements Quackable {
  private _quackers: Array<Quackable | Flock>;

  constructor(quackers: Array<Quackable | Flock>) {
    this._quackers = quackers;
  }

  registerObserver(observer: Observer): void {
    this._quackers.forEach((quacker) => quacker.registerObserver(observer));
  }

  notifyObservers(): void {
    this._quackers.forEach((quacker) => quacker.notifyObservers());
  }

  quack(): void {
    this._quackers.forEach((quacker) => quacker.quack());
    this.notifyObservers();
  }

  push(quackable: Quackable): void {
    this._quackers.push(quackable);
  }

  toString(): string {
    return "Flock";
  }
}
