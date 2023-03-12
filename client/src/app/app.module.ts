import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';

import { GeneralState } from './shared/context/general/general.state';
import { ProductsState } from './shared/context/products/products.state';
import { OtherCardsState } from './shared/context/other-cards/other-cards.state';
import { ContactState } from './shared/context/contact/contact.state';
import { StylismServicesState } from './shared/context/stylism/stylism.state';
import { AboutState } from './shared/context/about/about.state';


import { CarouselModule } from './shared/ui/carousel/carousel.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/ui/home.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/ui/products.component';
import { AllProductsListComponent } from './products/ui/all-products-list/all-products-list.component';

import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { ErrorComponent } from './error/error.component';
import { ContactModule } from './contact/contact.module';
import { StylismServicesModule } from './stylism-services/stylism-services.module';
import { HomeModule } from './home/ui/home.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllProductsListComponent,
    ProductsComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([
      ProductsState,
      OtherCardsState,
      GeneralState,
      ContactState,
      StylismServicesState,
      AboutState
    ]),
    CarouselModule,
    SharedModule,
    ProductModule,
    ContactModule,
    StylismServicesModule,
    HomeModule,
    AboutModule,
  ],

  bootstrap: [AppComponent],
  exports: [AppComponent],
})
export class AppModule {}
