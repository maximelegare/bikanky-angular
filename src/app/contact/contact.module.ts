import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { InfosComponent } from './ui/infos/infos.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ContactComponent,
    InfosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ContactModule { }