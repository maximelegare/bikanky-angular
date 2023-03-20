import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsComponent } from './materials.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialSectionComponent } from './ui/material-section/material-section.component';



@NgModule({
  declarations: [
    MaterialsComponent,
    MaterialSectionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MaterialsModule { }
