import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

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
  @Input() type?: string;

  @Input() noHover?: boolean = false;
  @Input() underlineOnHover?: boolean = false;
  @Input() noPadding?: boolean = false;

  @Input() addBorder: boolean = false;
  @Input() size?: string = 'small';
  @Input() href?:string
  @Input() routerLink: string | string[];
  @Input() fragment?: string;
  
  @Input() icon?: string;
  @Input() iconSize?: string;
  @Input() iconColor?: string;


  @Output() handleClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleButtonClick() {
    this.handleClick.emit();
  }

  getStyles() {
    switch (this.variant) {
      case 'text-only': {
        return `${
          this.size === 'big'
            ? `${this.noPadding ? '' : 'py-3 px-5'} text-xl font-bold`
            : `${this.noPadding ? '' : 'py-1  px-5'} text-md font-semibold `
        } ${this.textColor}  ${this.noHover ? '' : 'hover:opacity-100'}  ${
          this.underlineOnHover ? 'hover:underline' : ''
        }`;
      }
      case 'text-button': {
        return `${
          this.size === 'big'
            ? `${this.noPadding ? '' : 'py-1 px-3'}`
            : `${this.noPadding ? '' : 'py-1 px-3'} text-md font-semibold`
        } ${this.textColor} ${this.color}  rounded-md shadow-sm  ${
          this.underlineOnHover ? 'hover:underline' : ''
        } 
        ${this.addBorder ? `border-solid border-2 ${this.borderColor}` : ''}
        ${
          this.noHover
            ? ''
            : 'hover:scale-105 transition-scale duration-100 hover:opacity-100'
        }
`;
      }
      case 'text-button-border': {
        return `${
          this.size === 'big'
            ? `${this.noPadding ? '' : 'py-3 px-5'}  text-xl font-bold`
            : `${this.noPadding ? '' : 'py-1 px-3'} text-md font-semibold`
        } ${this.textColor} border-solid border-2 ${
          this.borderColor
        } rounded-md shadow-sm  ${
          this.underlineOnHover ? 'hover:underline' : ''
        } 
        ${
          this.noHover
            ? ''
            : 'hover:scale-105 transition-scale duration-100 hover:opacity-100  '
        }`;
      }
      case 'round': {
        return `p-4 ${this.textColor} ${this.color} rounded-full shadow-sm ${
          this.noHover
            ? ''
            : 'hover:scale-105 transition-scale duration-100 hover:opacity-100  '
        } `;
      }
      case 'icon': {
        console.log(this.icon)
        return `${this.iconSize} ${this.iconColor}`;
      }
      default: {
        return `${
          this.size === 'big' ? `${this.noPadding ? '' : 'py-3 px-5'} text-xl` : `${this.noPadding ? '' : 'py-1 px-3'} text-md`
        } text-black ${
          this.color || 'accent'
        }  rounded-md shadow-sm font-semibold ${
          this.underlineOnHover ? 'hover:underline' : ''
        } ${
          this.noHover
            ? ''
            : 'hover:scale-105 transition-scale duration-100 hover:opacity-100'
        } `;
      }
    }
  }
}
