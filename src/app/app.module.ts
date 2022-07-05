import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './components/sections/hero-section/hero-section.component';
import { TheHeaderComponent } from './components/the-header/the-header.component';
import { BaseButtonComponent } from './components/base/base-button/base-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    TheHeaderComponent,
    BaseButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
