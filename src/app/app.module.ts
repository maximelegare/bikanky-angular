import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from '@ngrx/effects';
import { productsReducer } from './store/products/products.reducer'; 
import { AppRoutingModule } from './app-routing.module';
import { ProductEffect } from './store/products/product.effects';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { HeroSectionComponent } from './components/sections/hero-section/hero-section.component';
import { TheHeaderComponent } from './components/layout/the-header/the-header.component';
import { BaseButtonComponent } from './components/base/buttons/base-button/base-button.component';
import { LineDivisorComponent } from './components/base/line-divisor/line-divisor.component';
import { ProductCardComponent } from './components/card/product-card/product-card.component';
import { ProductsSectionComponent } from './components/sections/products-section/products-section.component';
import { TheFooterComponent } from './components/layout/the-footer/the-footer.component';
import { IndexComponent } from './pages/index/index.component';
import { StylismSectionComponent } from './components/sections/stylism-section/stylism-section.component';
import { QuoteCardComponent } from './components/card/quote-card/quote-card.component';
import { QuotesSectionComponent } from './components/sections/quotes-section/quotes-section.component';
import { BaseCartButtonComponent } from './components/base/buttons/base-cart-button/base-cart-button.component';


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
    IndexComponent,
    StylismSectionComponent,
    QuoteCardComponent,
    QuotesSectionComponent,
    BaseCartButtonComponent,
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, HttpClientModule,
     StoreModule.forRoot({products: productsReducer}), EffectsModule.forRoot([ProductEffect]) 
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
