import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylismComponent } from './stylism.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    StylismComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StylismModule { }
