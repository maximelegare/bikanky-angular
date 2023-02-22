import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-wrapper',
  templateUrl: './product-card-wrapper.component.html',
  styleUrls: ['./product-card-wrapper.component.css']
})
export class ProductCardWrapperComponent implements OnInit {

  constructor() { }

  @Input() product:any
  @Input() noBulletPoints:boolean
  ngOnInit(): void {
  }

}
