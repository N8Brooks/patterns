import CurrentConditionsDisplay from "./DisplayElement/CurrentConditionsDisplay";
import ForecastDisplay from "./DisplayElement/ForecastDisplay";
import StatisticsDisplay from "./DisplayElement/StatisticsDisplay";
import WeatherData from "./WeatherData";

function weatherStation() {
  const weatherData = new WeatherData();

  const currentDisplay = new CurrentConditionsDisplay(weatherData);
  const statisticsDisplay = new StatisticsDisplay(weatherData);
  const forecastDisplay = new ForecastDisplay(weatherData);

  weatherData.setMeasurements(80, 65, 30.4);
  weatherData.setMeasurements(82, 70, 29.2);
  weatherData.setMeasurements(78, 90, 39.2);
}

weatherStation();
