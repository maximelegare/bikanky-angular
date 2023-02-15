import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-divisor',
  templateUrl:"./line-divisor.component.html",
  styleUrls: ['./line-divisor.component.css'],
})
export class LineDivisorComponent implements OnInit {
  @Input() marginTop: number;
  @Input() border: number = 1 ;
  @Input() color: string;

  constructor() {}
  ngOnInit(): void {}

  getStyles() {
    return `border-${this.border} border-solid rounded-sm border-${this.color? this.color: "accent"} mt-${this.marginTop}`;
  }
}
