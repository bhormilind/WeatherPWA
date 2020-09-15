import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherHomeComponent } from './weather-home/weather-home.component';
import { MatImportModule } from './_common/mat-import.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [WeatherHomeComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    MatImportModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    WeatherHomeComponent
  ]
})
export class WeatherModule { }
