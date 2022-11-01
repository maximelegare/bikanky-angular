import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StylismServicesComponent } from './stylism-services.component';
import { StylismServiceComponent } from './stylism-service/stylism-service.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    StylismServicesComponent,
    StylismServiceComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StylismServicesModule { }
