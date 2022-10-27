import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-title',
  templateUrl: './products-title.component.html',
  styleUrls: ['./products-title.component.css']
})
export class ProductsTitleComponent implements OnInit {

  @Input() title:string;

  constructor() { }

  ngOnInit(): void {
  }

}
