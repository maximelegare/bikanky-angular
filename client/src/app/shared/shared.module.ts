import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TestimonialCardComponent } from './ui/card/testimonial-card/testimonial-card.component';
import { TheHeaderComponent } from './layout/the-header/the-header.component';
import { BaseButtonComponent } from './ui/buttons/base-button/base-button.component';
import { LineDivisorComponent } from './ui/other/line-divisor/line-divisor.component';
import { TheFooterComponent } from './layout/the-footer/the-footer.component';
import { BaseCartButtonComponent } from './ui/buttons/base-cart-button/base-cart-button.component';
import { BulletComponent } from './ui/bullet/bullet.component';
import { ProductCardComponent } from './ui/card/product-card/product-card.component';
import { ProductsTitleComponent } from './ui/other/products-title/products-title.component';
import { EmplyCardComponent } from './ui/card/emply-card/emply-card.component';
import { ImageComponent } from './ui/image/image.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { NbSidebarModule } from '@nebular/theme';
import { BlockContentComponent } from './ui/block-content/block-content.component';


@NgModule({
  declarations: [
    TestimonialCardComponent,
    TheHeaderComponent,
    BaseButtonComponent,
    LineDivisorComponent,
    TheFooterComponent,
    BaseCartButtonComponent,
    BulletComponent,
    ProductCardComponent,
    ProductsTitleComponent,
    EmplyCardComponent,
    ImageComponent,
    SidebarComponent,
    BlockContentComponent,
  ],
  imports: [CommonModule, RouterModule, NbSidebarModule],
  exports: [
    TestimonialCardComponent,
    TheHeaderComponent,
    BaseButtonComponent,
    LineDivisorComponent,
    TheFooterComponent,
    BaseCartButtonComponent,
    BulletComponent,
    ProductCardComponent,
    ProductsTitleComponent,
    EmplyCardComponent,
    ImageComponent,
    BlockContentComponent
  ],
})
export class SharedModule {}
