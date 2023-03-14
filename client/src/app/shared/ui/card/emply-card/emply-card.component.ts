import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-emply-card',
  templateUrl: './emply-card.component.html',
  styleUrls: ['./emply-card.component.css'],
})
export class EmplyCardComponent implements OnInit {
  constructor() {}
  @Input() width?: string = 'w-full';
  @Input() borderHilight: boolean;

  getStyles() {
    return `bg-white rounded-md p-4 drop-shadow-md flex-initial ${
      !this.borderHilight ? '' : 'border-solid border-4 border-transparentAccent'
    } ${this.width}`;
  }

  ngOnInit(): void {}
}
