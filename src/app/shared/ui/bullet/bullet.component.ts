import { Component, Input, OnInit } from '@angular/core';
import { Bullet } from 'src/app/shared/context/products/product.model';


@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.css']
})
export class BulletComponent implements OnInit {

  @Input() bullet:Bullet; 

  constructor() { }

  ngOnInit(): void {
  }
}
