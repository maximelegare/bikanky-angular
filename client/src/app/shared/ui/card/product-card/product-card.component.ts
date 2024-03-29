import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormatString } from 'src/app/shared/services/utils/format-string.service';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GeneralState } from 'src/app/shared/context/general/general.state';
import {
  Product,
  ProductVariant,
} from 'src/app/shared/context/products/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  @Input() noBulletPoints?: boolean;

  @Input()title?:string;
  @Input()lengthType?:string;
  @Input()price:number;
  @Input()options:string[];
  @Input()image:string;
  @Input()starOfTheSeason:boolean

  @Select(GeneralState.getLang) lang$:Observable<string>

  routerLink: string[] = [];

  constructor(private router: Router, private formatString:FormatString) {}

  ngOnInit(): void { 

    

    if (this.product.slug) {
      if (this.router.url === '/products') {
        this.routerLink = this.product.slug;
      } else {
        this.routerLink = ['products', this.product.slug[0], this.product.slug[1]];
      }
    }
  }

  refactorPrice(price: number) {
    return ;
  }
}
