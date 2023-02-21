import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/context/products/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() noBulletPoints?: boolean;

  @Input()title?:string;
  @Input()lengthType?:string;
  @Input()price:number;
  @Input()options:string[];
  @Input()image:string;
  @Input()starOfTheSeason:boolean


  routerLink: string[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.product)
     
    if (this.router.url === '/products') {
      this.routerLink = [this.product.slug.current];
    } else {
      this.routerLink = ['products', this.product.slug.current];
    }
  }

  
  refactorPrice(price: number) {
    return ;
  }
}
