import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-divisor',
  templateUrl: './line-divisor.component.html',
  styleUrls: ['./line-divisor.component.css']
})
export class LineDivisorComponent implements OnInit {

  @Input() marginTop?:number = 0;

  constructor() { }
  ngOnInit(): void {
  }

  myClass = `border-1 border-solid rounded-sm border-accent mt-${this.marginTop}`


}
