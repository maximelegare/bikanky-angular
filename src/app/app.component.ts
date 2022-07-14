import { Component, OnInit } from '@angular/core';
import { ShopifyService } from './services/shopify/shopify.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bikanky';
  products = [] 



  constructor(private shopify:ShopifyService) {}

  ngOnInit(): void {
   this.shopify.fetchData()
  }


}
