import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  handleClick(){
    console.log('clicked')
    let x = document.querySelector("#home_products")
    if(x){
      x.scrollIntoView()
    }
  }
}
