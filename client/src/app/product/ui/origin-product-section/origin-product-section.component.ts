import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-origin-product-section',
  templateUrl: './origin-product-section.component.html',
  styleUrls: ['./origin-product-section.component.css']
})
export class OriginProductSectionComponent implements OnInit {

  constructor() { }

  @Input() product:any

  ngOnInit(): void {
  }

}
