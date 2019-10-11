import { DataPipe } from './pipes/data.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorIntl } from '@angular/material';

import { MascaraDirective } from './directives/mascara.directive';
import { PtBrMatPaginatorIntl, TipoPipe } from './';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	MascaraDirective,
  	TipoPipe,
  	DataPipe
  ],
  exports: [
  	MascaraDirective,
  	TipoPipe,
    DataPipe
  ],
  providers: [
  	PtBrMatPaginatorIntl
  ]
})
export class SharedModule { }
