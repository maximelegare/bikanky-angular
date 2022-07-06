import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-divisor',
  template: `<hr [ngClass]="getStyles()" />`,
  styleUrls: ['./line-divisor.component.css'],
})
export class LineDivisorComponent implements OnInit {
  @Input() marginTop: number;

  constructor() {}
  ngOnInit(): void {}

  getStyles() {
    return `border-1 border-solid rounded-sm border-accent mt-${this.marginTop}`;
  }
}
