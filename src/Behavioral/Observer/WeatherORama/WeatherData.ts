import Observer from "./Observer";
import Subject from "./Subject";

export default class WeatherData implements Subject {
  private observers: Array<Observer>;
  private _temperature: number;
  private _humidity: number;
  private _pressure: number;

  constructor() {
    this.observers = [];
    this._temperature = 0;
    this._humidity = 0;
    this._pressure = 0;
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    0 <= index && this.observers.splice(index, 1);
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this._temperature, this._humidity, this._pressure);
    }
  }

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  measurementsChanged(): void {
    this.notifyObservers();
  }

  setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this._temperature = temperature;
    this._humidity = humidity;
    this._pressure = pressure;
    this.measurementsChanged();
  }
}
