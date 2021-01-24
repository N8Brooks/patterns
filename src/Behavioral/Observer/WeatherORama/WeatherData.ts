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

  removeObserver(observer: Observer) {
    const index = this.observers.indexOf(observer);
    0 <= index && this.observers.splice(index, 1);
  }

  notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this._temperature, this._humidity, this._pressure);
    }
  }

  registerObserver(observer: Observer) {
    this.observers.push(observer);
  }

  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this._temperature = temperature;
    this._humidity = humidity;
    this._pressure = pressure;
    this.measurementsChanged();
  }
}
