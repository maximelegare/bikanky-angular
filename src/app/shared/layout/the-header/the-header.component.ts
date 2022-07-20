import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-header',
  templateUrl: './the-header.component.html',
  
})
export class TheHeaderComponent implements OnInit {

  @Input() src:string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
