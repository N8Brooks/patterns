export interface Observer {
  update(duck: QuackObservable): void;
}

export class Quackologist implements Observer {
  update(duck: QuackObservable): void {
    console.log(`Quackologist: ${duck.toString()} just quacked`);
  }
}

export interface QuackObservable {
  registerObserver(observer: Observer): void;
  notifyObservers(): void;
}

export class Observable implements QuackObservable {
  private _observers: Array<Observer> = [];
  private _duck: QuackObservable;

  constructor(duck: QuackObservable) {
    this._duck = duck;
  }

  registerObserver(observer: Observer): void {
    this._observers.push(observer);
  }

  notifyObservers(): void {
    this._observers.forEach((observer) => observer.update(this._duck));
  }
}
