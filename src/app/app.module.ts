import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {IvyCarouselModule} from 'angular-responsive-carousel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './components/sections/hero-section/hero-section.component';
import { TheHeaderComponent } from './components/the-header/the-header.component';
import { BaseButtonComponent } from './components/base/base-button/base-button.component';
import { LineDivisorComponent } from './components/base/line-divisor/line-divisor.component';
import { ProductCardComponent } from './components/card/product-card/product-card.component';
import { ProductsSectionComponent } from './components/sections/products-section/products-section.component';
import { TheFooterComponent } from './components/the-footer/the-footer.component';
import { IndexComponent } from './pages/index/index.component';
import { StylismSectionComponent } from './components/sections/stylism-section/stylism-section.component';
import { QuoteCardComponent } from './components/card/quote-card/quote-card.component';
import { QuotesSectionComponent } from './components/sections/quotes-section/quotes-section.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
