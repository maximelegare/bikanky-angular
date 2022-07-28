import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { ProductsState } from './shared/context/products/products.state';
import { TestimonialsState } from './shared/context/testimonials/testimonial.state';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './home/ui/hero-section/hero-section.component';

import { ProductsSectionComponent } from './home/ui/products-section/products-section.component';
import { HomeComponent } from './home/ui/home.component';
import { StylismSectionComponent } from './home/ui/stylism-section/stylism-section.component';
import { QuotesSectionComponent } from './home/ui/testimonials-section/testimonials-section.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/ui/products.component';
import { AllProductsListComponent } from './products/ui/all-products-list/all-products-list.component';

import { CarouselModule } from './shared/ui/carousel/carousel.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    ProductsSectionComponent,
    HomeComponent,
    StylismSectionComponent,
    QuotesSectionComponent,
    AllProductsListComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([ProductsState, TestimonialsState]),
    CarouselModule,
    SharedModule,
  ],

  bootstrap: [AppComponent],
  exports: [AppComponent],
})
export class AppModule {}
