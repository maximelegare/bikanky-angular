import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.css'],
})
export class BaseButtonComponent implements OnInit {
  @Input() text: string;
  @Input() textColor?: string = 'text-black';
  @Input() borderColor?: string = 'border-accent';
  @Input() color?: string = 'bg-accent';
  @Input() variant: string;
  @Input() icon: string;
  @Input() type?: string;
  @Input() underlineOnHover?: boolean = false;
  @Input() addBorder: boolean = false;

  @Input() size?: string = 'small';
  @Input() routerLink: string | string[];

  constructor() {}

  ngOnInit(): void {}

  getStyles() {
    switch (this.variant) {
      case 'text-only': {
        return `${
          this.size === 'big'
            ? 'py-3 px-5 text-xl font-bold'
            : 'py-1 px-3 text-md font-semibold '
        } ${this.textColor}  hover:opacity-100 ${
          this.underlineOnHover ? 'hover:underline' : ''
        }`;
      }
      case 'text-button': {
        return `${
          this.size === 'big'
            ? 'py-3 px-5 text-xl font-bold'
            : 'py-1 px-3 text-md font-semibold'
        } ${this.textColor} ${this.color}  rounded-md shadow-sm  ${
          this.underlineOnHover ? 'hover:underline' : ''
        } 
        ${this.addBorder ? `border-solid border-2 ${this.borderColor}` : ''}
        hover:scale-105 transition-scale duration-100 hover:opacity-100  `;
      }
      case 'text-button-border': {
        return `${
          this.size === 'big'
            ? 'py-3 px-5 text-xl font-bold'
            : 'py-1 px-3 text-md font-semibold'
        } ${this.textColor} border-solid border-2 ${
          this.borderColor
        } rounded-md shadow-sm  ${
          this.underlineOnHover ? 'hover:underline' : ''
        } hover:scale-105 transition-scale duration-100 hover:opacity-100  `;
      }
      case 'round': {
        return `p-4 ${this.textColor} ${this.color} rounded-full shadow-sm hover:scale-105 transition-scale duration-100 hover:opacity-100  `;
      }
      default: {
        return `${
          this.size === 'big' ? 'py-3 px-5 text-xl' : 'py-1 px-3 text-md'
        } text-black ${
          this.color || 'accent'
        }  rounded-md shadow-sm font-semibold ${
          this.underlineOnHover ? 'hover:underline' : ''
        } hover:scale-105 transition-scale duration-100 hover:opacity-100  `;
      }
    }
  }
}
