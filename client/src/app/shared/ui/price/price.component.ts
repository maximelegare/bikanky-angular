import { Component, OnInit, Input, ChangeDetectorRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent implements OnInit {
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  @Input() price: number;

  dollars: string;
  cents: string;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.formatPrice(changes['price'].currentValue);
  }

  formatPrice(price: number) {
    this.dollars = price?.toFixed(2).toString().slice(0, -3);
    this.cents = price?.toFixed(2).toString().slice(-2);
  }
}
