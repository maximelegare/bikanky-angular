import { Component, Input, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-the-header',
  templateUrl: './the-header.component.html',
})
export class TheHeaderComponent implements OnInit {
  
  @Input() src: string = '';

  defaultHeader = true;
  headerChange = false;

  constructor(public router: Router) {
    router.events.subscribe(() => {
      if(this.router.url === "/"){
        this.defaultHeader = false
      }
      else{
        this.defaultHeader = true
      }
    });
  }

  ngOnInit(): void {}


  @HostListener('window:scroll', ['event'])
  scrollFunction(event: any) {
    if (window.pageYOffset > 20) {
      this.headerChange = true;
    } else {
      this.headerChange = false;
    }
  }
}
