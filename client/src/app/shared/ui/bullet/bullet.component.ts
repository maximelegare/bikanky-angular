import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.css']
})
export class BulletComponent implements OnInit {

  @Input() noDivisor?:boolean;
  
  constructor() { }

  ngOnInit(): void {
  }
}
