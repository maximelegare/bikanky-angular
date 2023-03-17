import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aos-wrapper',
  templateUrl: './aos-wrapper.component.html',
  styleUrls: ['./aos-wrapper.component.css']
})
export class AosWrapperComponent implements OnInit {

  constructor() { }

  @Input() animation:string;
  @Input() noAnimation:boolean   
  ngOnInit(): void {
  }

}
