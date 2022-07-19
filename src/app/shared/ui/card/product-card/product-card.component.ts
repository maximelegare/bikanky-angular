import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() src:string ;
  @Input() title:string ;
  @Input() subTitle:string
  @Input() startingPrice:number;
  @Input() icon:string;

  constructor() { }

  ngOnInit(): void {
  }

  refactorPrice(price:number){
    return price.toFixed(2)
  }


}
