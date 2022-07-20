import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { ProductsState } from './context/products/products.state';
import { TestimonialsState } from './context/testimonials/testimonial.state';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './home/ui/hero-section/hero-section.component';
import { TheHeaderComponent } from './layout/the-header/the-header.component';
import { BaseButtonComponent } from './shared/ui/buttons/base-button/base-button.component';
import { LineDivisorComponent } from './shared/ui/other/line-divisor/line-divisor.component';
import { ProductCardComponent } from './shared/ui/card/product-card/product-card.component';
import { ProductsSectionComponent } from './home/ui/products-section/products-section.component';
import { TheFooterComponent } from './layout/the-footer/the-footer.component';
import { IndexComponent } from './home/ui/index.component';
import { StylismSectionComponent } from './home/ui/stylism-section/stylism-section.component';
import { QuoteCardComponent } from './shared/ui/card/quote-card/quote-card.component';
import { QuotesSectionComponent } from './home/ui/quotes-section/quotes-section.component';
import { BaseCartButtonComponent } from './shared/ui/buttons/base-cart-button/base-cart-button.component';
import { HttpClientModule } from '@angular/common/http';
import { BulletComponent } from './shared/ui/bullet/bullet.component';

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
    BulletComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([ProductsState, TestimonialsState]),
  ],
  providers: [NgxsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
