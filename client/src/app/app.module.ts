import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';

import { GeneralState } from './shared/context/general/general.state';
import { ProductsState } from './shared/context/products/products.state';
import { TestimonialsState } from './shared/context/testimonials/testimonial.state';
import { ContactState } from './shared/context/contact/contact.state';

import { CarouselModule } from './shared/ui/carousel/carousel.module';


import { AppComponent } from './app.component';
import { HeroSectionComponent } from './home/ui/hero-section/hero-section.component';
import { ProductsSectionComponent } from './home/ui/products-section/products-section.component';
import { HomeComponent } from './home/ui/home.component';
import { StylismSectionComponent } from './home/ui/stylism-section/stylism-section.component';
import { QuotesSectionComponent } from './home/ui/testimonials-section/testimonials-section.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/ui/products.component';
import { AllProductsListComponent } from './products/ui/all-products-list/all-products-list.component';

import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { ErrorComponent } from './error/error.component';
import { NbThemeModule } from '@nebular/theme'
import { NbSidebarModule } from '@nebular/theme';
import { ContactModule } from './contact/contact.module';

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
    ErrorComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([ProductsState, TestimonialsState, GeneralState, ContactState ]),
    CarouselModule,
    SharedModule,
    ProductModule,
    ContactModule
  ],

  bootstrap: [AppComponent],
  exports: [AppComponent],
})
export class AppModule {}
