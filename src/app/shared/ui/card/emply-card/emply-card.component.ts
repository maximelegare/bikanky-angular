import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-emply-card',
  templateUrl: './emply-card.component.html',
  styleUrls: ['./emply-card.component.css']
})
export class EmplyCardComponent implements OnInit {

  constructor() { }
  @Input() width?:string = "w-96"


  getStyles(){
    return `bg-white rounded-md p-4 drop-shadow-md flex-initial ${this.width}`
  }

  ngOnInit(): void {
  }

}
