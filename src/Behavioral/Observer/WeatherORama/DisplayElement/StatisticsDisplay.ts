import DisplayElement from ".";
import Observer from "../Observer";
import WeatherData from "../WeatherData";

export default class StatisticsDisplay implements Observer, DisplayElement {
  private maxTemperature = 0;
  private minTemperature = Infinity;
  private sumTemperature = 0;
  private numReadings = 0;
  private weatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(): void {
    const temperature = this.weatherData.temperature;
    this.maxTemperature = Math.max(this.maxTemperature, temperature);
    this.minTemperature = Math.min(this.minTemperature, temperature);
    this.sumTemperature += temperature;
    this.numReadings++;
    this.display();
  }

  display(): void {
    const avgTemperature = this.sumTemperature / this.numReadings;
    console.log(`Avg/Max/Min temperature: ${avgTemperature}/${this.maxTemperature}/${this.minTemperature}`);
  }
}
