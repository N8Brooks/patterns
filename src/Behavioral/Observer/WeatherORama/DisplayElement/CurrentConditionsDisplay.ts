import DisplayElement from ".";
import Observer from "../Observer";
import WeatherData from "../WeatherData";

export default class CurrentConditionsDisplay
  implements Observer, DisplayElement {
  private _temperature = 0;
  private _humidity = 0;
  private weatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = WeatherData;
    weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this._temperature = temperature;
    this._humidity = humidity;
    this.display();
  }

  display(): void {
    console.log(
      `Current conditions: ${this._temperature} F degrees and ${this._humidity}% humidity.`
    );
  }
}
