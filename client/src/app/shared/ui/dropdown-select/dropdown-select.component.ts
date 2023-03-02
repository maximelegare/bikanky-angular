import { Component, OnInit, Input } from '@angular/core';
import { ProductVariant } from '../../context/products/product.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Event } from '@angular/router';
@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.css'],
})
export class DropdownSelectComponent implements OnInit {

  constructor(public route: ActivatedRoute, public router: Router) {
    this.router.events.subscribe((event:Event) => {
      
      const variantSku = this.route.snapshot.params['sku'];
      this.currentVariantSelected = variantSku;
      // console.log(this.currentVariantSelected)
    });
  }

  ngOnInit(): void {}

  currentVariantSelected: string = this.route.snapshot.params['sku'];

  @Input() variants: ProductVariant[];
  @Input() currentVariant: ProductVariant | null;
}
