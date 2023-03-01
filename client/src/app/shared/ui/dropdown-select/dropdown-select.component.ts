import { Component, OnInit, Input } from '@angular/core';
import { ProductVariant } from '../../context/products/product.model';
@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.css']
})
export class DropdownSelectComponent implements OnInit {

  constructor() { }
  @Input() variants:ProductVariant[]
  @Input()currentProduct:ProductVariant

  showSelectDropdown:boolean = false
  
  handleShowSelectDropdown(){
    this.showSelectDropdown = !this.showSelectDropdown
  }

  ngOnInit(): void {
    console.log("variants", this.variants)
  }

}
