import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';



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
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NbSidebarModule } from '@nebular/theme';
import { BlockContentComponent } from './ui/block-content/block-content.component';
import { HeaderDesktopComponent } from './layout/the-header/header-desktop/header-desktop.component';
import { HeaderMobileComponent } from './layout/the-header/header-mobile/header-mobile.component';
import { MediaIconComponent } from './ui/media-icon/media-icon.component';
import { SpinnerComponent } from './ui/spinner/spinner.component';
import { CardTitleComponent } from './ui/other/card-title/card-title.component';
import { DropdownSelectComponent } from './ui/dropdown-select/dropdown-select.component';
import { PriceComponent } from './ui/price/price.component';
import { FindMeCardComponent } from './ui/card/find-me-card/find-me-card.component';
import { AosWrapperComponent } from './ui/aos-wrapper/aos-wrapper.component';
import { ContainerComponent } from './ui/container/container.component';
import { MaterialCardComponent } from './ui/card/material-card/material-card.component';
import { LimitedEditionFlagComponent } from './ui/limited-edition-flag/limited-edition-flag.component';



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
    HeaderDesktopComponent,
    HeaderMobileComponent,
    MediaIconComponent,
    SpinnerComponent,
    CardTitleComponent,
    DropdownSelectComponent,
    PriceComponent,
    FindMeCardComponent,
    AosWrapperComponent,
    ContainerComponent,
    MaterialCardComponent,
    LimitedEditionFlagComponent,
  ],
  imports: [CommonModule, RouterModule, NbSidebarModule, FormsModule, NgSelectModule],
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
    BlockContentComponent,
    HeaderDesktopComponent,
    SidebarComponent,
    MediaIconComponent,
    SpinnerComponent,
    CardTitleComponent,
    DropdownSelectComponent,
    PriceComponent,
    FindMeCardComponent,
    AosWrapperComponent,
    ContainerComponent,
    MaterialCardComponent,
    LimitedEditionFlagComponent
  ],
})
export class SharedModule {}
