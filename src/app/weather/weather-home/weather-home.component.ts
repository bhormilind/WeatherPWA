import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { WeatherData } from '../_common/_model/WeatherData.model';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss'],
})
export class WeatherHomeComponent implements OnInit {
  myForm: FormGroup;

  // state variables
  loading = false;
  success = false;
  public icnUrl = 'http://openweathermap.org/img/wn/';
  weatherData: WeatherData = null;

  constructor(private _fb: FormBuilder, private _ser: WeatherService) {}

  ngOnInit(): void {
    this.myForm = this._fb.group({
      city: ['', [Validators.required]],
    });
  }

  get city(): AbstractControl {
    return this.myForm.get('city');
  }

  submitHandler(): void {
    if (!this.myForm.valid) {
      return;
    }

    this.loading = true;

    const cityName = this.myForm.value.city;

    console.log(`City : ${cityName}`);
    this._ser.getWeather(cityName).subscribe((d) => {
      console.log('Call success');
      console.log(` Weather Data : ${JSON.stringify(d)}`);
      if (d) {
        this.weatherData = d;
        this.icnUrl = this.icnUrl + this.weatherData.weather[0].icon + '.png';
        console.log(this.icnUrl);
      }
    });
  }
}
