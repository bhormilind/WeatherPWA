import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { WeatherData } from '../_common/_model/WeatherData.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  private _apiURL = 'http://api.openweathermap.org/data/2.5/weather';
  // ?q={city name}&appid={your api key}

  public getWeather(cityName: string): Observable<any> {
    const param = {
      q: cityName,

      units: 'imperial'
    };
    return this.http
      .get<WeatherData>(this._apiURL, { params: param })
      .pipe(
        // tap((t) => console.log(` Weather Data : ${JSON.stringify(t)}`)),
        map( (o: any) => {
          return {
            weather: o.weather,
            main: o.main
          };
        } )
      );
  }
}
