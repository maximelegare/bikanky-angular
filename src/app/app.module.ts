import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './components/sections/hero-section/hero-section.component';
import { TheHeaderComponent } from './components/the-header/the-header.component';
import { BaseButtonComponent } from './components/base/base-button/base-button.component';
import { LineDivisorComponent } from './components/base/line-divisor/line-divisor.component';
import { ProductCardComponent } from './components/card/product-card/product-card.component';
import { ProductsSectionComponent } from './components/sections/products-section/products-section.component';
import { TheFooterComponent } from './components/the-footer/the-footer.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
