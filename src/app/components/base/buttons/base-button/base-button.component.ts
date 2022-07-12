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
  @Input() color?:string = 'accent';
  @Input() size?:string = 'small';


  constructor() {}

  ngOnInit(): void {

    
  }

  getStyles() {
    switch (this.variant) {
      case 'text-only': {
        return `${this.size === "big"? "py-3 px-5 text-xl": "py-1 px-3 text-md" } text-black  font-semibold hover:opacity-100 ${this.underlineOnHover? "hover:underline":""}`;
      }
      case 'text-button': {
        return `${this.size === "big"? "py-3 px-5 text-xl": "py-1 px-3 text-md" } text-black bg-${this.color} rounded-md shadow-sm font-semibold ${this.underlineOnHover? "hover:underline":""} hover:scale-105 transition-scale duration-100 hover:opacity-100  `;
      }
      case 'round': {
        return `p-4 text-black bg-${this.color} rounded-full shadow-sm hover:scale-105 transition-scale duration-100 hover:opacity-100  `;
      }
      case 'outlined':{
        return `${this.size === "big"? "py-3 px-5 text-xl": "py-1 px-3 text-md" } text-black outline-${this.color} rounded-md shadow-sm font-semibold ${this.underlineOnHover? "hover:underline":""} hover:scale-105 transition-scale duration-100 hover:opacity-100  `;
      }
      default: {
        return ``;
      }
    }
  }
}
