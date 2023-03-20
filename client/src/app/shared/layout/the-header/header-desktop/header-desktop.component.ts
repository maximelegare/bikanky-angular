import { Component, Input, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrls: ['./header-desktop.component.css']
})
export class HeaderDesktopComponent implements OnInit {
  
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

  handleClick(noScroll?: boolean) {
    if (noScroll) {
      return
    } else {
      window.scrollTo(0, 0);
    }
  }

  @HostListener('window:scroll', ['event'])
  scrollFunction(event: any) {
    if (window.pageYOffset > 20) {
      this.headerChange = true;
    } else {
      this.headerChange = false;
    }
  }
}
