import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { ProductsState } from './shared/context/products/products.state';
import { TestimonialsState } from './shared/context/testimonials/testimonial.state';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './home/ui/hero-section/hero-section.component';
import { TheHeaderComponent } from './shared/layout/the-header/the-header.component';
import { BaseButtonComponent } from './shared/ui/buttons/base-button/base-button.component';
import { LineDivisorComponent } from './shared/ui/other/line-divisor/line-divisor.component';
import { ProductsSectionComponent } from './home/ui/products-section/products-section.component';
import { TheFooterComponent } from './shared/layout/the-footer/the-footer.component';
import { HomeComponent } from './home/ui/home.component';
import { StylismSectionComponent } from './home/ui/stylism-section/stylism-section.component';
import { QuotesSectionComponent } from './home/ui/testimonials-section/testimonials-section.component';
import { BaseCartButtonComponent } from './shared/ui/buttons/base-cart-button/base-cart-button.component';
import { HttpClientModule } from '@angular/common/http';
import { BulletComponent } from './shared/ui/bullet/bullet.component';
import { ProductsComponent } from './products/ui/products.component';
import { AllProductsListComponent } from './products/ui/all-products-list/all-products-list.component';
import { ProductCardComponent } from './shared/ui/card/product-card/product-card.component';
import { ProductsTitleComponent } from './shared/ui/other/products-title/products-title.component';

import { CarouselModule } from './shared/ui/carousel/carousel.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    TheHeaderComponent,
    BaseButtonComponent,
    LineDivisorComponent,
    ProductCardComponent,
    ProductsSectionComponent,
    TheFooterComponent,
    HomeComponent,
    StylismSectionComponent,
    QuotesSectionComponent,
    BaseCartButtonComponent,
    BulletComponent,
    AllProductsListComponent,
    ProductsComponent,
    ProductsTitleComponent,
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
