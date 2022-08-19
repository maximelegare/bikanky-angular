import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ImageProductSectionComponent } from './image-product-section/image-product-section.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsProductSectionComponent } from './details/details-product-section/details-product-section.component';
import { CarouselModule } from '../shared/ui/carousel/carousel.module';

@NgModule({
  declarations: [
    ProductComponent,
    ImageProductSectionComponent,
    DetailsProductSectionComponent,
  ],
  imports: [CommonModule, SharedModule, CarouselModule],
})
export class ProductModule {}
