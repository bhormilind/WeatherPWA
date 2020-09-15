export interface WeatherData {
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    temp: number,
    temp_min: number,
    temp_max: number
  };
}
