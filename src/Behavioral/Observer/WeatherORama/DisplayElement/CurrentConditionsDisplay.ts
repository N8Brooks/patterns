import DisplayElement from ".";
import Observer from "../Observer";
import WeatherData from "../WeatherData";

export default class CurrentConditionsDisplay implements Observer, DisplayElement {
  private _temperature = 0;
  private _humidity = 0;
  private weatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(): void {
    this._humidity = this.weatherData.humidity;
    this._temperature = this.weatherData.temperature;
    this.display();
  }

  display(): void {
    console.log(`Current conditions: ${this._temperature} F degrees and ${this._humidity}% humidity.`);
  }
}
