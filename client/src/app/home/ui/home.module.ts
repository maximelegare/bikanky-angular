import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesSectionComponent } from './testimonials-section/testimonials-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { StylismSectionComponent } from './stylism-section/stylism-section.component';
import { StarsSectionComponent } from './stars-section/stars-section.component';
import { ProductsSectionComponent } from './products-section/products-section.component';
import { CarouselModule } from 'src/app/shared/ui/carousel/carousel.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FindMeSectionComponent } from './find-me-section/find-me-section.component';

@NgModule({
  declarations: [
    QuotesSectionComponent,
    HeroSectionComponent,
    StylismSectionComponent,
    StarsSectionComponent,
    ProductsSectionComponent,
    FindMeSectionComponent,
  ],
  imports: [CommonModule, SharedModule, CarouselModule],
  exports: [
    QuotesSectionComponent,
    HeroSectionComponent,
    StylismSectionComponent,
    StarsSectionComponent,
    ProductsSectionComponent,
    FindMeSectionComponent,
  ],
})
export class HomeModule {}
