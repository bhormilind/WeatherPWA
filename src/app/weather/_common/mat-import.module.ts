import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';


const matImports: any  = [
  MatAutocompleteModule,
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matImports
  ],
  exports: [
    matImports
  ]
})
export class MatImportModule { }
