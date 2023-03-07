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
  @Input() width?: string = 'w-40';
  @Input() height?: string = 'h-auto';
  @Input() landScape?: boolean = false;
  @Input() overlayOnHover: boolean = false;
  @Input() class?: string;
  @Input() noRadiusBottom?:boolean

  ngOnInit(): void {}
  getStyles() {
    return `${this.width} ${ this.height} overflow-hidden ${this.noRadiusBottom? "rounded-t-lg":"rounded-lg"} mx-auto`;
  }
}
