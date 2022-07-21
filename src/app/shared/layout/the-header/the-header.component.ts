import { Component, Input, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-the-header',
  templateUrl: './the-header.component.html',
  
})
export class TheHeaderComponent implements OnInit {

  @Input() src:string = "";


  constructor() { }

  ngOnInit(): void {
  }

  headerChange=false
  @HostListener('window:scroll', ['event'])
  scrollFunction(event:any){
    if(window.pageYOffset>20){
      this.headerChange = true
    }
    else{
      this.headerChange = false
    }
  }


}
