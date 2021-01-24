import DisplayElement from ".";
import Observer from "../Observer";
import WeatherData from "../WeatherData";

export default class ForecastDisplay implements Observer, DisplayElement {
  private currentPressure = 29.92;
  private lastPressure = 29.92;
  private weatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(): void {
    this.lastPressure = this.currentPressure;
    this.currentPressure = this.weatherData.pressure;

    this.display();
  }

  display(): void {
    const forecast =
      this.lastPressure < this.currentPressure
        ? "Improving weather on the way!"
        : this.lastPressure == this.currentPressure
        ? "More of the same."
        : "Watch out for cooler, rainier weather";

    console.log(`Forecast: ${forecast}`);
  }
}
