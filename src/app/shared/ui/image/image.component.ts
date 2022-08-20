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
  @Input() width?: string  = 'w-40'
  @Input() height?: string = 'h-60'

  ngOnInit(): void {}
  getStyles() {
    return `${this.width} ${this.height} overflow-hidden rounded-lg mx-auto bg-slate-200`;
  }
}
