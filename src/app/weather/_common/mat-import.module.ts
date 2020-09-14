import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

const matImports: any = [MatAutocompleteModule, MatInputModule, MatCardModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, matImports],
  exports: [matImports],
})
export class MatImportModule {}
