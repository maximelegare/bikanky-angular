import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  routerLink: string[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void { 

    console.log(this.product)


    if (this.product.slug) {
      if (this.router.url === '/products') {
        this.routerLink = [this.product.slug.current];
      } else {
        this.routerLink = ['products', this.product.slug.current];
      }
    }
  }

  refactorPrice(price: number) {
    return price.toFixed(2);
  }
}
