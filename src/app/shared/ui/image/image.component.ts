import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';



@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor() { }
  @Input() src:string;
  
  ngOnInit(): void {
    console.log(this.src)
  }

}
