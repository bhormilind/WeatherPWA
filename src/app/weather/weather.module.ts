import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherHomeComponent } from './weather-home/weather-home.component';
import { MatImportModule } from './_common/mat-import.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [WeatherHomeComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    MatImportModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    WeatherHomeComponent
  ]
})
export class WeatherModule { }
