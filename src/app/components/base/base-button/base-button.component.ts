import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.css'],
})
export class BaseButtonComponent implements OnInit {
  @Input() text: string;
  @Input() variant: string 
  @Input() icon: string;
  @Input() type?: string;
  @Input() underlineOnHover?:boolean = false;



  constructor() {}

  ngOnInit(): void {

    
  }

  getStyles() {
    switch (this.variant) {
      case 'text-only': {
        return `py-1 px-3 text-black  font-semibold hover:opacity-100 ${this.underlineOnHover? "hover:underline":""}`;
      }
      case 'text-button': {
        return `py-1 px-3 text-black bg-accent rounded-md shadow-sm font-semibold ${this.underlineOnHover? "hover:underline":""} hover:scale-105 transition-scale duration-100 hover:opacity-100  `;
      }
      case 'round': {
        return `p-4 text-black bg-accent rounded-full shadow-sm hover:scale-105 transition-scale duration-100 hover:opacity-100  `;
      }
      default: {
        return ``;
      }
    }
  }
}
