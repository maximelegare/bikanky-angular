import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  constructor() {}
  @Input() src: string;
  @Input() width?: string = '40';
  @Input() height?: string = '60';
  @Input() landScape: boolean = false;
  @Input() darkOnHover: boolean = false

  ngOnInit(): void {}
  getStyles() {
    return `w-${this.landScape ? this.height : this.width} h-${
      this.landScape ? this.width : this.height
    } overflow-hidden rounded-lg mx-auto`;
  }
}
