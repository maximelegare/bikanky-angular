import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ImageProductSectionComponent } from './ui/image-product-section/image-product-section.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsProductSectionComponent } from './ui/details-product-section/details-product-section.component';
import { CarouselModule } from '../shared/ui/carousel/carousel.module';
import { SelectProductSectionComponent } from './ui/select-product-section/select-product-section.component';
import { OriginProductSectionComponent } from './ui/origin-product-section/origin-product-section.component';

@NgModule({
  declarations: [
    ProductComponent,
    ImageProductSectionComponent,
    DetailsProductSectionComponent,
    SelectProductSectionComponent,
    OriginProductSectionComponent,
  ],
  imports: [CommonModule, SharedModule, CarouselModule],
})
export class ProductModule {}
