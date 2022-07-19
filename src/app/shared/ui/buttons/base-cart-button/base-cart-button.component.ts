import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-cart-button',
  templateUrl: './base-cart-button.component.html',
  styleUrls: ['./base-cart-button.component.css']
})
export class BaseCartButtonComponent implements OnInit {

  @Input() numberItem:number;

  constructor() { }

  ngOnInit(): void {
  }

}
