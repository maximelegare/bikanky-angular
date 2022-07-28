import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialCardComponent } from './ui/card/testimonial-card/testimonial-card.component';



@NgModule({
  declarations: [TestimonialCardComponent],
  imports: [
    CommonModule
  ],exports:[
    TestimonialCardComponent
  ]
})
export class SharedModule {}
