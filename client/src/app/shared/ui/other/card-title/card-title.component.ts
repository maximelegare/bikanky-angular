import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.css']
})
export class CardTitleComponent implements OnInit {

  constructor() { }

  @Input() title:string
  ngOnInit(): void {
  }



  getStyles(){
    
  }



}
