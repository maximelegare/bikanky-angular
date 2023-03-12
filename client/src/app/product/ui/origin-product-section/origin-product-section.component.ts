import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-origin-product-section',
  templateUrl: './origin-product-section.component.html',
  styleUrls: ['./origin-product-section.component.css']
})
export class OriginProductSectionComponent implements OnInit {

  constructor() { }

  @Input() productOrigin:any

  ngOnInit(): void {
    console.log(this.productOrigin)
  }

}
